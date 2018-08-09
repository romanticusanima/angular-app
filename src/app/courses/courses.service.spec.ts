import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service = new CoursesService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return real value', () => {
    expect(service.getCourseItems().length).toEqual(5);
    expect(service.getCourseItems()[2].id).toEqual(3);
    expect(service.getCourseItems()[2].title).toEqual('Video Course #3');
  });

  it('check removeCourse', () => {
    expect(service.removeCourse(1).length).toEqual(4);
    expect(service.getCourseItems()[0].id).toEqual(2);
  });
});
