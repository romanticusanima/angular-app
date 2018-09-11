import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent implements OnInit {
  @Input() courseId: string;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isOpen: boolean;
  public confirmDelete: boolean;

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.isOpen = false;
    this.close.emit(this.isOpen);
  }

  deleteItem() {
    this.confirmDelete = true;
    this.confirm.emit(this.confirmDelete);
  } 
}
