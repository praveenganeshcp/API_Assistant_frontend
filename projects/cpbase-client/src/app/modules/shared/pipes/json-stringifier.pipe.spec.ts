import { JsonStringifierPipe } from './json-stringifier.pipe';

describe('JsonStringifierPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonStringifierPipe();
    expect(pipe).toBeTruthy();
  });
});
