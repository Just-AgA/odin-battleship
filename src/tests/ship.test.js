import Ship from '../ship.js';

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

  test('registers a hit at a valid coordinate', () => {
    const ship = Ship(2);
    ship.setCoordinates([
      [1, 1],
      [1, 2],
    ]);
    const result = ship.hit(1, 1);
    expect(result).toBe(true);
  });

  test('does not register a hit at an invalid coordinate', () => {
    const ship = Ship(2);
    ship.setCoordinates([
      [1, 1],
      [1, 2],
    ]);
    const result = ship.hit(2, 2);
    expect(result).toBe(false);
  });

  test('does not register a hit at the same coordinate twice', () => {
    const ship = Ship(2);
    ship.setCoordinates([
      [1, 1],
      [1, 2],
    ]);
    ship.hit(1, 1);
    const secondHit = ship.hit(1, 1);
    expect(secondHit).toBe(false);
  });

  test('isSunk returns false if not all parts are hit', () => {
    const ship = Ship(2);
    ship.setCoordinates([
      [0, 0],
      [0, 1],
    ]);
    ship.hit(0, 0);
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk returns true when all parts are hit', () => {
    const ship = Ship(2);
    ship.setCoordinates([
      [0, 0],
      [0, 1],
    ]);
    ship.hit(0, 0);
    ship.hit(0, 1);
    expect(ship.isSunk()).toBe(true);
  });
});
