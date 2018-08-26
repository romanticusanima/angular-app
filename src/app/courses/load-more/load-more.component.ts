import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {
  @Output() more: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  loadMoreButton() {
    this.more.emit(10);
  }

}
