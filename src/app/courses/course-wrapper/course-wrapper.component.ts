import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';
import { AuthorizationService } from '../../core/authorization.service';

@Component({
  selector: 'app-course-wrapper',
  templateUrl: './course-wrapper.component.html',
  styleUrls: ['./course-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseWrapperComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public courseItems: CourseItem[] = [];
  public message: string = "Currently you don't have available courses. Feel free to add new courses.";
  public searchResult: string;

  constructor(private coursesService: CoursesService,
              private authorizationService: AuthorizationService) { }

  receiveResult($event) {
    this.searchResult = $event;
  }

  getCoursesList() {
    this.courseItems = this.coursesService.getcourseItems();
  }

  getLoginInfo() {
    this.isLoggedIn = this.authorizationService.isAuth();
  }

  ngOnInit() {
    this.getLoginInfo();
    if(this.isLoggedIn) {
      this.getCoursesList();
    }
  }

}
