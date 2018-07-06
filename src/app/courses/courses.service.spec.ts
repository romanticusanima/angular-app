import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return real value', () => {
    let service = new CoursesService();
    expect(service.getcourseItems().length).toEqual(5);
    expect(service.getcourseItems()[2].id).toEqual(3);
    expect(service.getcourseItems()[2].title).toEqual('Video Course #3');
  });
});
