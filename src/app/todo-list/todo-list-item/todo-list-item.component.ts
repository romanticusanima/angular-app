import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../todo-list-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() public todoItem: TodoListItem;
  @Output() getItemId: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  getId(event, id) {
    this.getItemId.emit(id);
    console.log(id);
  }    

  // ngOnChanges() {           console.log('ngOnChange'); }

  // ngDoCheck() {             console.log('ngDoCheck'); }

  // ngAfterContentInit() {    console.log('ngAfterContentInit'); }

  // ngAfterContentChecked() { console.log('ngAfterContentChecked'); }

  // ngAfterViewInit() {       console.log('ngAfterViewInit'); }

  // ngAfterViewChecked() {    console.log('ngAfterViewChecked'); } 

  // ngOnDestroy() {           console.log('ngOnDestroy'); }

}
