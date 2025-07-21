const GameController = require('../gameController');

describe('GameController', () => {
  let controller;

  beforeEach(() => {
    controller = GameController();
    controller.setupShips();
  });

  test('starts with current player as human', () => {
    expect(controller.getCurrentPlayer()).toBe('human');
  });

  test('player turn changes to computer after move', () => {
    const result = controller.takeTurn(0, 0);
    if (result) {
      expect(controller.getCurrentPlayer()).toBe('computer');
    }
  });

  test('computer plays and turn goes back to human', () => {
    controller.takeTurn(0, 0); // human plays
    const { result } = controller.computerTurn(); // computer plays
    expect(['hit', 'miss']).toContain(result);
    expect(controller.getCurrentPlayer()).toBe('human');
  });

  test('detects game over when all ships are sunk', () => {
    const enemyBoard = controller.computer.getGameboard();
    for (const ship of enemyBoard.getShips()) {
      for (const [x, y] of ship.getCoordinates()) {
        controller.player.attack(enemyBoard, x, y);
      }
    }
    expect(controller.isGameOver()).toBe(true);
  });
});
