import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseItem } from '../../courses/course-item.model';
import { CoursesService } from '../../courses/courses.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: '../add-course-page/add-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css'],
  providers: [DatePipe]
})
export class EditCoursePageComponent implements OnInit {
  public courseId: number;
  public course: CourseItem;

  public authors: string;

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
      this.authors = data.authors.map(a => a.firstName).join(', ')
    });
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
    this.coursesService.updateCourse(this.courseId, this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }
}
