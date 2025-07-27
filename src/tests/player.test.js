const Player = require('../player');
const Gameboard = require('../gameboard');
const Ship = require('../ship');

describe('Player', () => {
  let player, enemy;

  beforeEach(() => {
    player = Player(false);
    enemy = Player(false);
  });

  test('attacks enemy board', () => {
    const enemyBoard = enemy.getGameboard();
    const ship = Ship(1);
    enemyBoard.placeShip(ship, 0, 0, true);

    const result = player.attack(enemyBoard, 0, 0);
    expect(result).toBe('hit');
  });

  test('computer makes legal random move', () => {
    const computer = Player(true);
    const result = computer.computerAttack(player.getGameboard());
    expect(['hit', 'miss']).toContain(result.result);
    expect(result.x).toBeGreaterThanOrEqual(0);
    expect(result.x).toBeLessThan(10);
    expect(result.y).toBeGreaterThanOrEqual(0);
    expect(result.y).toBeLessThan(10);
  });

  test('computer does not attack same square twice', () => {
    const computer = Player(true);
    const coords = new Set();

    for (let i = 0; i < 100; i++) {
      const { x, y } = computer.computerAttack(player.getGameboard());
      const key = `${x},${y}`;
      expect(coords.has(key)).toBe(false);
      coords.add(key);
    }
  });
});
