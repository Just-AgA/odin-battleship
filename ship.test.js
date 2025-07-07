import Ship from './ship';

test('new instance of ship has proper parameters', () => {
  const ship = Ship(3);
  expect(ship.hit()).toBe(1);
  expect(ship.hit()).toBe(2);
  expect(ship.isSunk()).toBe(false);
  expect(ship.hit()).toBe(3);
  expect(ship.isSunk()).toBe(true);
});
