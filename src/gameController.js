const Player = require('./player');
const Ship = require('./ship');

const GameController = () => {
  const player = Player(false);
  const computer = Player(true);

  // Example predetermined ship setup
  const setupShips = () => {
    const playerBoard = player.getGameboard();
    const computerBoard = computer.getGameboard();

    const shipLengths = [5, 4, 3, 3, 2, 2, 1, 1, 1];

    const placeFleetRandomly = (board) => {
      const MAX_ATTEMPTS_PER_SHIP = 100;

      for (let length of shipLengths) {
        let placed = false;
        let attempts = 0;

        while (!placed & (attempts < MAX_ATTEMPTS_PER_SHIP)) {
          const x = Math.floor(Math.random() * 10);
          const y = Math.floor(Math.random() * 10);
          const isHorizontal = Math.random() < 0.5;

          const ship = Ship(length);
          placed = board.placeShip(ship, x, y, isHorizontal);
          attempts++;
        }

        if (!placed) {
          throw new Error(
            `Failed to place ship of length ${length} after ${MAX_ATTEMPTS_PER_SHIP} attempts.`
          );
        }
      }
    };

    placeFleetRandomly(playerBoard);
    placeFleetRandomly(computerBoard);
  };

  const isGameOver = () =>
    player.getGameboard().allShipsSunk() ||
    computer.getGameboard().allShipsSunk();

  let currentPlayer = 'human';

  const takeTurn = (x, y) => {
    if (currentPlayer === 'human') {
      const result = player.attack(computer.getGameboard(), x, y);
      if (result) currentPlayer = 'computer';
      return result;
    }
    return null;
  };

  const computerTurn = () => {
    if (currentPlayer === 'computer') {
      const { result, x, y } = computer.computerAttack(player.getGameboard());
      currentPlayer = 'human';
      return { result, x, y };
    }
    return null;
  };

  return {
    player,
    computer,
    setupShips,
    takeTurn,
    computerTurn,
    isGameOver,
    getCurrentPlayer: () => currentPlayer,
  };
};

module.exports = GameController;
