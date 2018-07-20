import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-wrapper',
  templateUrl: './course-wrapper.component.html',
  styleUrls: ['./course-wrapper.component.css']
})
export class CourseWrapperComponent implements OnInit {
  public courseItems: CourseItem[] = [];
  public message: string = "Currently you don't have available courses. Feel free to add new courses.";
  searchResult: string;

  constructor(private coursesService: CoursesService) { }

  receiveResult($event) {
    this.searchResult = $event;
  }

  getCoursesList() {
    this.courseItems = this.coursesService.getcourseItems();
  }

  ngOnInit() {
    this.getCoursesList();
  }

}
