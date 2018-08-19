import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css']
})
export class CourseDateComponent implements OnInit {
  @Input() creationDate: any;
  @Output() onChangeDate: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.onChangeDate.emit(this.creationDate);
  }

}
