import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';

@Injectable()

export class CoursesService {

  constructor() { }

  public getcourseItems(): CourseItem[] {
    return [
      {
        id: 1,
        title: 'Video Course #1',
        creationDate: new Date('03.02.2017'),
        duration: 80,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        top: true
      },
      {
        id: 2,
        title: 'Video Course #2',
        creationDate: new Date('07.15.2018'),
        duration: 220,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        top: true
      },
      {
        id: 3,
        title: 'Video Course #3',
        creationDate: new Date('11.05.2017'),
        duration: 45,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        top: false
      },
      {
        id: 4,
        title: 'Video Course #4',
        creationDate: new Date('09.17.2018'),
        duration: 110,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        top: false
      },
      {
        id: 5,
        title: 'Video Course #5',
        creationDate: new Date('04.05.2017'),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        top: false
      }
    ];
  }
}
