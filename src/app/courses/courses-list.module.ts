import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseWrapperComponent } from './course-wrapper/course-wrapper.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
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
    AddCourseComponent, 
    LoadMoreComponent
  ],
  exports: [
    CourseWrapperComponent, 
    SearchComponent, 
    AddCourseComponent, 
    LoadMoreComponent
  ]
})
export class CoursesListModule { }
