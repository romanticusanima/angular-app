import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

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
  @Output() getItemId: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('confirmationModal') myModal;
  public isOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { } 

  openPopup() {
    this.isOpen = true;
  }

  getIsOpen($event) {
    this.isOpen = $event;
  }

  editCourse(id) {
    this.router.navigate(['/courses', id]);
  }
}
