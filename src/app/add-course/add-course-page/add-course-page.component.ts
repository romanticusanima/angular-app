import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses/courses.service';
import { Router } from '@angular/router';
import { CourseItem } from '../../courses/course-item.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  course: CourseItem;

  constructor(private coursesService: CoursesService,
              private router: Router) { }

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

  onChangeDate(value) {
    this.course.date = value;
  }

  onChangeDuration(value) {
    this.course.length = value
  }

  onChangeAuthor(value) {
    value = value.split(', ');
    this.course.authors.forEach((val,index) => {
      val.firstName = value[index];
    });
  }

  cancel() {
    this.router.navigate(['/courses']);
  }

  updateCourse() {
    this.coursesService.createCourse(this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

}
