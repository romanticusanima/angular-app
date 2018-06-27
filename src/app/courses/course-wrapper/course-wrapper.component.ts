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

  constructor(private CoursesService: CoursesService) { }

  ngOnInit() {
    this.courseItems = this.CoursesService.getcourseItems();
  }

}
