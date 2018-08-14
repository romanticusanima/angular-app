import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.css']
})
export class AddCourseButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }

}
