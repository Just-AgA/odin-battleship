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
});
