import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  public title: string;
  public description: string;
  public creationDate: any;
  public duration: number;
  public author: string;

  constructor(private coursesService: CoursesService,
              private router: Router) { }

  ngOnInit() {
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
    let newCourse = {
      title: this.title,
      description: this.description,
      creationDate: this.creationDate,
      duration: this.duration,
      author: this.author
    }

    this.coursesService.createCourse(newCourse);
    this.router.navigate(['/courses']);
  }

}
