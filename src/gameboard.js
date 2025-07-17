const Gameboard = () => {
  const boardSize = 10;
  const ships = [];
  const hits = [];
  const missedAttacks = [];

  const isValidCoord = (x, y) => {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  };

  const isOccupied = (x, y) => {
    return ships.some((ship) =>
      ship.getCoordinates().some((coord) => coord[0] === x && coord[1] === y)
    );
  };

  const alreadyAttacked = (x, y) => {
    return (
      hits.some((coordinate) => coordinate[0] === x && coordinate[1] === y) ||
      missedAttacks.some(
        (coordinate) => coordinate[0] === x && coordinate[1] === y
      )
    );
  };
};

module.exports = Gameboard;
