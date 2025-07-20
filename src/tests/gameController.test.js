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
});
