import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';
import { AuthorizationService } from '../../core/authorization.service';
import { Subscription } from "rxjs";
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-course-wrapper',
  templateUrl: './course-wrapper.component.html',
  styleUrls: ['./course-wrapper.component.css']
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
  public searched: boolean = false;

  constructor(private coursesService: CoursesService,
              private authorizationService: AuthorizationService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.getLoginInfo();
    if(this.isLoggedIn) {
      this.getCoursesList();
    }
  }

  getLoginInfo() {
    this.isLoggedIn = this.authorizationService.isAuth();
  }

  getCoursesList() {
    this.coursesSubscription = this.coursesService.getCourseItems(this.start, this.countToLoad).subscribe((data: CourseItem[]) => {
      this.courseItems = data;
    });
  }

  receiveResult($event) {
    this.searchResult = $event;
    this.countToLoad = '10';
    this.search(this.searchResult);
  }

  search(queryString: string = '') {
    this.coursesSearchSubscription = this.coursesService.getCourseItemsSearch(queryString, this.start, this.countToLoad).subscribe((data: CourseItem[]) => {
      this.courseItems = data;
      this.searched = true;
    });
  }

  loadMore($event) {
    this.countToLoad = +this.countToLoad + $event;
    if (this.searchResult) {
      this.search(this.searchResult);
    } else {
      this.getCoursesList();
    }
  }

  onDelete(courseId: number) {
    this.coursesService.removeCourse(courseId).subscribe(() => {
      this.getCoursesList();
    });
  } 

  ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
    if(this.searched) {
      this.coursesSearchSubscription.unsubscribe();
    }
  }
}
