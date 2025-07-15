const Gameboard = () => {
  const boardSize = 10;
  const ships = [];
  const hits = [];
  const missedAttacks = [];

  const isValidCoord = (x, y) => {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  };
};

module.exports = Gameboard;
