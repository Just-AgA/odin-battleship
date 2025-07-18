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

  const placeShip = (ship, x, y, isHorizontal = true) => {
    const coords = [];

    for (let i = 0; i < ship.length; i++) {
      const coordX = isHorizontal ? x + i : x;
      const coordY = isHorizontal ? y : y + i;

      if (!isValidCoord(coordX, coordY)) return false;
      coords.push([coordX, coordY]);
    }

    // Check buffer zone around each ship coordinate
    for (const [cx, cy] of coords) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (isValidCoord(nx, ny) && isOccupied(nx, ny)) {
            return false;
          }
        }
      }
    }

    ship.setCoordinates(coords);
    ships.push(ship);
    return true;
  };

  const receiveAttack = (x, y) => {
    if (!isValidCoord(x, y) || alreadyAttacked(x, y)) {
      return null; // Invalid or duplicate attack
    }

    for (const ship of ships) {
      if (ship.hit(x, y)) {
        hits.push([x, y]);
        return 'hit';
      }
    }

    missedAttacks.push([x, y]);
    return 'miss';
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());
};

module.exports = Gameboard;
