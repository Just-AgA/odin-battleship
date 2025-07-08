import Ship from './ship';

describe('Ship Factory Function', () => {
  test('throws error if length is zero or negative', () => {
    expect(() => Ship(0)).toThrow('Ship length must be positive.');
    expect(() => Ship(-2)).toThrow('Ship length must be positive.');
  });

  test('sets and gets coordinates correctly', () => {
    const ship = Ship(3);
    const coords = [
      [0, 0],
      [0, 1],
      [0, 2],
    ];
    ship.setCoordinates(coords);
    expect(ship.getCoordinates()).toEqual(coords);
  });
});
