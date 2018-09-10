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
  public courseData;
  public title: string;
  public description: string;
  public creationDate: any;
  public duration: number;
  public author: string;

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
      this.courseData = data;
      this.title = this.courseData.name;
      this.description = this.courseData.description;
      this.creationDate = this.datePipe.transform(this.courseData.date, 'shortDate');
      this.duration = this.courseData.length;
      this.author = this.courseData.authors[0].firstName;
    });
  }

  onChangeDate(value) {
    this.creationDate = value;
  }

  onChangeDuration(value) {
    this.duration = value
  }

  onChangeAuthor(value) {
    this.author = value;
  }

  cancel() {
    this.router.navigate(['/courses']);
  }

  updateCourse() {
    let update = {
      title: this.title,
      description: this.description,
      creationDate: this.creationDate,
      duration: this.duration,
      author: this.author
    }
    this.coursesService.updateCourse(this.courseId, update);
    this.router.navigate(['/courses']);
  }

}
