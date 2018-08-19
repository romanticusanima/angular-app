import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css']
})
export class CourseDurationComponent implements OnInit {
  @Input() duration: number;
  @Output() onChangeDuration: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.onChangeDuration.emit(this.duration);
  }

}
