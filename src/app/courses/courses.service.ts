import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';

@Injectable()

export class CoursesService {

  constructor() { }

  public course: CourseItem[];

  public courses: CourseItem[] = [
    {
      id: 1,
      title: 'Video Course #1',
      creationDate: new Date('03.02.2017'),
      duration: 80,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      top: true,
      author: 'Nick'
    },
    {
      id: 2,
      title: 'Video Course #2',
      creationDate: new Date('07.15.2018'),
      duration: 220,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      top: true,
      author: 'David'
    },
    {
      id: 3,
      title: 'Video Course #3',
      creationDate: new Date('11.05.2017'),
      duration: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      top: false,
      author: 'Monica'
    },
    {
      id: 4,
      title: 'Video Course #4',
      creationDate: new Date('09.17.2018'),
      duration: 110,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      top: false,
      author: 'Jack'
    },
    {
      id: 5,
      title: 'Video Course #5',
      creationDate: new Date('04.05.2017'),
      duration: 120,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      top: false,
      author: 'Brian'
    }
  ];

  getCourseItems() {
    return this.courses;
  }

  createCourse(data: any) {
    data.id = this.courses.length;
    this.courses.push(data);
  }

  getCourseById(courseId: number) {
    return this.course = this.courses.filter(course => course.id == courseId);
  }

  updateCourse(courseId: number, data: any) {
    let index = this.courses.findIndex(function(el) {
      return el.id == courseId;
    });
    this.courses[index].title = data.title;
    this.courses[index].description = data.description;
    this.courses[index].creationDate = data.creationDate;
    this.courses[index].duration = data.duration;
    this.courses[index].author = data.author;
  }

  removeCourse(courseId: number) {
    return this.courses = this.courses.filter(course => course.id !== courseId);
  }
}