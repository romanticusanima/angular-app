import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('126 minutes is equal to 2h 6 min', () => {
    expect(pipe.transform(126)).toBe('2 h 6 min');
  }); 
});
