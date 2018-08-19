import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-author',
  templateUrl: './course-author.component.html',
  styleUrls: ['./course-author.component.css']
})
export class CourseAuthorComponent implements OnInit {
  @Input() author: string;
  @Output() onChangeAuthor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.onChangeAuthor.emit(this.author);
  }

}
