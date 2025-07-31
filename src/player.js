const Gameboard = require('./gameboard');

function Player(isComputer = false) {
  const gameboard = Gameboard();
  const previousMoves = [];

  const getGameboard = () => gameboard;

  const attack = (enemyBoard, x, y) => {
    return enemyBoard.receiveAttack(x, y);
  };

  const getRandomCoord = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (
      previousMoves.some(
        (coordinate) => coordinate[0] === x && coordinate[1] === y
      )
    );
    previousMoves.push([x, y]);
    return [x, y];
  };

  const computerAttack = (enemyBoard) => {
    const [x, y] = getRandomCoord();
    return { result: enemyBoard.receiveAttack(x, y), x, y };
  };

  return {
    isComputer,
    getGameboard,
    attack,
    computerAttack,
  };
}

module.exports = Player;
