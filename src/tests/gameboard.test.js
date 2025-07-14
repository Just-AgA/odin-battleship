const Ship = require('../ship');
const Gameboard = require('../gameboard');

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = Gameboard();
  });

  test('places ship correctly', () => {
    const ship = Ship(3);
    const placed = gameboard.placeShip(ship, 0, 0, true);
    expect(placed).toBe(true);
    expect(gameboard.getShips()).toContain(ship);
  });

  test('rejects overlapping ship placement', () => {
    const ship1 = Ship(3);
    const ship2 = Ship(4);
    gameboard.placeShip(ship1, 0, 0, true);
    const placed = gameboard.placeShip(ship2, 1, 0, true);
    expect(placed).toBe(false);
  });
});
