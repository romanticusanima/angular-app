import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css']
})
export class CourseDateComponent implements OnInit {
  @Input() creationDate: string;
  @Output() onChangeDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.onChangeDate.emit(this.creationDate);
  }

}
