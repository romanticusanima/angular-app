import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  // let service = new CoursesService();

  // let courseFake = {
  //   title: 'test title',
  //   description: 'test description',
  //   creationDate: '07/07/2019',
  //   duration: '250',
  //   author: 'test author'
  // }

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [CoursesService]
  //   });
  // });

  // it('should be created', inject([CoursesService], (service: CoursesService) => {
  //   expect(service).toBeTruthy();
  // }));

  // it('should return real value', () => {
  //   expect(service.getCourseItems().length).toEqual(5);
  //   expect(service.getCourseItems()[2].id).toEqual(3);
  //   expect(service.getCourseItems()[2].title).toEqual('Video Course #3');
  // });

  // it('check removeCourse', () => {
  //   expect(service.removeCourse(1).length).toEqual(4);
  //   expect(service.getCourseItems()[0].id).toEqual(2);
  // });

  // it('check getCourseById', () => {
  //   expect(service.getCourseById(3).length).toEqual(1);
  //   expect(service.course[0].id).toEqual(3);
  // });

  // it('check createCourse', () => {
  //   let newLength = service.getCourseItems().length
  //   service.createCourse(courseFake);
  //   expect(service.getCourseItems().length).toEqual(newLength + 1);
  //   expect(service.getCourseItems()[newLength].title).toEqual('test title');
  // });

  // it('check updateCourse', () => {
  //   service.updateCourse(4, courseFake);
  //   service.getCourseById(4);
  //   expect(service.course[0].title).toEqual('test title');
  // });
});
