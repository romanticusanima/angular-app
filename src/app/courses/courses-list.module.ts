import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseWrapperComponent } from './course-wrapper/course-wrapper.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { CoursesService } from './courses.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CoursesService
  ],
  declarations: [
    CourseWrapperComponent, 
    CourseItemComponent, 
    SearchComponent, 
    AddCourseButtonComponent, 
    LoadMoreComponent
  ],
  exports: [
    CourseWrapperComponent, 
    SearchComponent, 
    AddCourseButtonComponent, 
    LoadMoreComponent
  ]
})
export class CoursesListModule { }
