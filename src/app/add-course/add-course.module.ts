import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseAuthorComponent } from './course-author/course-author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AddCoursePageComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorComponent,
    EditCoursePageComponent,
    CustomInputComponent
  ],
  exports: [
    AddCoursePageComponent,
    EditCoursePageComponent
  ]
})
export class AddCourseModule { }
