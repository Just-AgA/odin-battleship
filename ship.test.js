import Ship from './ship';

describe('Ship Factory Function', () => {
  test('throws error if length is zero or negative', () => {
    expect(() => Ship(0)).toThrow('Ship length must be positive.');
    expect(() => Ship(-2)).toThrow('Ship length must be positive.');
  });
});
