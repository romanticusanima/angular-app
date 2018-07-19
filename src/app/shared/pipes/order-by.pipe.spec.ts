import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  const courses: any[] = [
    {
      id: 1,
      title: 'Video Course #1',
      creationDate: new Date('07.10.2018'),
      duration: 220
    },
    {
      id: 2,
      title: 'Video Course #2',
      creationDate: new Date('03.02.2017'),
      duration: 220
    }
  ]

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('check order return -1', () => {
    expect(pipe.transform(courses, 'title')[0].id).toBe(1);
  }); 

  it('check order return 1', () => {
    expect(pipe.transform(courses, 'creationDate')[0].id).toBe(2);
  });

  it('check order return 0', () => {
    expect(pipe.transform(courses, 'duration')[0].id).toBe(2);
  }); 
});
