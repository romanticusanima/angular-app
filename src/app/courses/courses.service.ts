import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { catchError, retry } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable()

export class CoursesService {

  constructor(private http: HttpClient) { }

  public course: CourseItem[];

  public courses: CourseItem[];

  getCourseItems(start: string, count: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${BASE_URL}`, {params: {start, count}});
  }

  getCourseItemsSearch(textFragment: string, start: string, count: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${BASE_URL}`, {params: {textFragment, start, count}})
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  createCourse(data: any): Observable<CourseItem> {
    return this.http.post<CourseItem>(`${BASE_URL}`, {data});
  }

  getCourseById(courseId: number): Observable<CourseItem> {
    return this.http.get<CourseItem>(`${BASE_URL}/${courseId}`);
  }

  updateCourse(courseId: number, data: any) {
    let index = this.courses.findIndex(function(el) {
      return el.id == courseId;
    });
    this.courses[index].name = data.title;
    this.courses[index].description = data.description;
    this.courses[index].date = data.creationDate;
    this.courses[index].length = data.duration;
    this.courses[index].authors = data.author;
  }

  removeCourse(courseId: number): Observable<CourseItem> {
    return this.http.delete<CourseItem>(`${BASE_URL}/${courseId}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
