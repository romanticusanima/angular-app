import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  //@Output() getItemId: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('confirmationModal') myModal;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() { }

  deleteItem(id) {
    //this.getItemId.emit(id);
    this.coursesService.removeCourse(id);
  } 

  openModel() {
    this.myModal.nativeElement.className = 'modal fade show';
  }
  closeModel() {
    this.myModal.nativeElement.className = 'modal fade';
  }
}
