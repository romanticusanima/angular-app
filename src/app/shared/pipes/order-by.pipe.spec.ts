import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  const courses: any[] = [
    {
      id: 1,
      title: 'Video Course #1',
      creationDate: new Date('03.02.2017'),
      duration: 80
    },
    {
      id: 2,
      title: 'Video Course #2',
      creationDate: new Date('07.10.2018'),
      duration: 220
    }
  ]

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform(courses, '')).toEqual(courses);
  }); 
});
