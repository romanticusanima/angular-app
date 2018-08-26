import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';
import { AuthorizationService } from '../../core/authorization.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-course-wrapper',
  templateUrl: './course-wrapper.component.html',
  styleUrls: ['./course-wrapper.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseWrapperComponent implements OnInit {
  public isLoggedIn: boolean = true;
  public courseItems: CourseItem[] = [];
  public message: string = "Currently you don't have available courses. Feel free to add new courses.";
  public searchResult: string;
  public start: string = '0';
  public countToLoad: string = '10';
  public coursesSubscription: Subscription;
  public coursesSearchSubscription: Subscription;

  constructor(private coursesService: CoursesService,
              private authorizationService: AuthorizationService) { }

  receiveResult($event) {
    this.searchResult = $event;
    this.countToLoad = '10';
    this.search(this.searchResult);
  }

  loadMore($event) {
    this.countToLoad = +this.countToLoad + $event;
    if (this.searchResult) {
      this.search(this.searchResult);
    } else {
      this.getCoursesList();
    }
  }

  getCoursesList() {
    this.coursesSubscription = this.coursesService.getCourseItems(this.start, this.countToLoad).subscribe((data: CourseItem[]) => {
      this.courseItems = data;
    });
  }

  search(queryString: string = '') {
    this.coursesSearchSubscription = this.coursesService.getCourseItemsSearch(queryString, this.start, this.countToLoad).subscribe((data: CourseItem[]) => {
      this.courseItems = data;
    });
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

  ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
    this.coursesSearchSubscription.unsubscribe();
  }

}
