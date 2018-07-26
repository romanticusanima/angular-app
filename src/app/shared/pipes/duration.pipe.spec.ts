import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('no value return empty string', () => {
    expect(pipe.transform(NaN)).toBe('');
  }); 

  it('42 minutes is equal 42 min', () => {
    expect(pipe.transform(42)).toBe('42 min');
  }); 

  it('120 minutes is equal 2 h', () => {
    expect(pipe.transform(120)).toBe('2 h');
  }); 

  it('126 minutes is equal to 2h 6 min', () => {
    expect(pipe.transform(126)).toBe('2 h 6 min');
  }); 
});
