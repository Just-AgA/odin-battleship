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

  test('registers hits and misses correctly', () => {
    const ship = Ship(2);
    gameboard.placeShip(ship, 0, 0, true);
    expect(gameboard.receiveAttack(0, 0)).toBe('hit');
    expect(gameboard.receiveAttack(5, 5)).toBe('miss');
  });

  test('detects all ships sunk', () => {
    const ship = Ship(2);
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test('ignores duplicate attacks', () => {
    const ship = Ship(2);
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.receiveAttack(0, 0)).toBe(null); // already attacked
  });
});
