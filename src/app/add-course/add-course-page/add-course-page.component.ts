import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses/courses.service';
import { Router } from '@angular/router';
import { CourseItem } from '../../courses/course-item.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css'],
  providers: [DatePipe]
})
export class AddCoursePageComponent implements OnInit {
  course: CourseItem;

  courseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl(this.datePipe.transform(new Date(), 'dd/MM/yyyy'), [Validators.required]),
    length: new FormControl(1, [Validators.required]),
    authors: new FormControl('', [Validators.required])
  });

  get form() { 
    return this.courseForm.controls 
  }

  constructor(private coursesService: CoursesService,
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.course = { 
      id: Math.floor(Math.random()*1000),
      name: '',
      description: '',
      isTopRated: false,
      date: Date.now(),
      length: 1,
      authors: [
          {
            id: 1,
            firstName: '',
            lastName: ''
          }
      ]
     }
  }

  changeAuthor(value) {
    value = value.split(', ');
    value.forEach((val, index) => {
      this.course.authors.push({
        id: 0,
        firstName: val,
        lastName: ''
      })
    });
  }

  cancel() {
    this.router.navigate(['/courses']);
  }

  updateCourse() {
    this.course.name = this.courseForm.value.name;
    this.course.description = this.courseForm.value.description;
    let date = this.courseForm.value.date.split("/");
    this.course.date = new Date(date[2], date[1] - 1, date[0]);
    this.course.length = this.courseForm.value.length;
    this.changeAuthor(this.courseForm.value.authors);
    this.coursesService.createCourse(this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

}
