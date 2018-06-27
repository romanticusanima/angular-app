import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  @Output() getItemId: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  getId(id) {
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
