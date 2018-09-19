import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseItem } from '../../courses/course-item.model';
import { CoursesService } from '../../courses/courses.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: '../add-course-page/add-course-page.component.html',
  styleUrls: ['../add-course-page/add-course-page.component.css'],
  providers: [DatePipe]
})
export class EditCoursePageComponent implements OnInit {
  public courseId: number;
  public course: CourseItem;

  public authors: string;

  courseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required]),
    length: new FormControl('', [Validators.required]),
    authors: new FormControl('', [Validators.required])
  });

  get form() { 
    return this.courseForm.controls 
  }

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService,
              private datePipe: DatePipe,
              private router: Router) {}

  ngOnInit() {
    // subscribe to router event
    this.route.params.subscribe((data) => {
      this.courseId = data['id'];
    });
    this.getCourseInfo();
  }

  getCourseInfo() {
    this.coursesService.getCourseById(this.courseId).subscribe((data: CourseItem) => {
      this.course = data;
      this.authors = data.authors.map(a => a.firstName).join(', ');
      this.courseForm.patchValue({
        name: data.name,
        description: data.description,
        date: this.datePipe.transform(new Date(data.date), 'dd/MM/yyyy'),
        length: data.length,
        authors: this.authors
      });
    });
  }

  changeAuthor(value) {
    value = value.split(', ');
    this.course.authors.forEach((val,index) => {
      val.firstName = value[index];
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
    this.coursesService.updateCourse(this.courseId, this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }
}
