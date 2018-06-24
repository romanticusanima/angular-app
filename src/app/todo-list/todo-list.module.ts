import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoListComponent, TodoListItemComponent, SearchComponent, AddCourseComponent, LoadMoreComponent],
  exports: [TodoListComponent, SearchComponent, AddCourseComponent, LoadMoreComponent]
})
export class TodoListModule { }
