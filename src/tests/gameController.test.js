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
});
