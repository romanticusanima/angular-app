import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  const courses: any[] = [
    {
      id: 1,
      title: 'course 1'
    },
    {
      id: 2,
      title: 'course 2'
    }
  ]

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('providing no value returns all courses', () => {
    expect(pipe.transform(courses, undefined)).toEqual(courses);
  }); 

  it('return only match result', () => {
    expect(pipe.transform(courses, '1')).toEqual([ courses[0] ]);
  }); 
});
