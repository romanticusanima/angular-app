import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseWrapperComponent } from './course-wrapper/course-wrapper.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { CoursesService } from './courses.service';
import { DurationPipe } from '../shared/duration.pipe';
import { OrderByPipe } from '../shared/order-by.pipe';
import { CreatedDateDirective } from '../shared/created-date.directive';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  declarations: [
    CourseWrapperComponent, 
    CourseItemComponent, 
    SearchComponent, 
    AddCourseComponent, 
    LoadMoreComponent,
    DurationPipe,
    OrderByPipe,
    CreatedDateDirective,
    FilterPipe
  ],
  exports: [
    CourseWrapperComponent, 
    SearchComponent, 
    AddCourseComponent, 
    LoadMoreComponent
  ]
})
export class CoursesListModule { }
