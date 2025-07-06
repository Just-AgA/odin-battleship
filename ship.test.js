import Ship from './ship';

test('new instance of ship has proper parameters', () => {
  const ship = Ship(3);
  expect(ship.length).toBe(3);
});
