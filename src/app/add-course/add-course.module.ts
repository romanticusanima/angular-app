import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseAuthorComponent } from './course-author/course-author.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AddCoursePageComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorComponent
  ],
  exports: [
    AddCoursePageComponent
  ]
})
export class AddCourseModule { }
