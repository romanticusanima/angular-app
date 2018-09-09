import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  public isOpen: boolean = false;
  public confirmDelete: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  openPopup() {
    this.isOpen = true;
  }

  getIsOpen($event) {
    this.isOpen = $event;
  }

  deleteConfirm($event) {
    this.confirmDelete = $event;
    if (this.confirmDelete) {
      this.delete.emit(this.courseItem.id);
    }
  }

  editCourse(id) {
    this.router.navigate(['/courses', id]);
  }
}
