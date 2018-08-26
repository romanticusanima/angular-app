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
  public isOpen: boolean;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  closePopup() {
    this.isOpen = false;
    this.close.emit(this.isOpen);
  }

  deleteItem() {
    this.coursesService.removeCourse(this.courseId).subscribe(() => {
      this.closePopup();
      this.coursesService.getCourseItems
    });
  } 

  public deleteUser(id: string): void {
    // this.usersDeleteSubscription = this.usersService.deleteUser(id).subscribe(() => {
    //   this.init();
    // });
  }
}
