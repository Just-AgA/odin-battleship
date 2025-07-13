function Ship(length) {
  if (length <= 0) throw new Error('Ship length must be positive.');

  // Coordinates of the ship on the gameboard
  let coordinates = [];
  // Coordinates where the ship got hit
  let hitCoordinates = [];

  const setCoordinates = (coords) => {
    coordinates = coords;
  };

  const getCoordinates = () => coordinates;

  const hit = (x, y) => {
    // Check if the attack is on this ship
    const isPartOfShip = coordinates.some(
      (coordinate) => coordinate[0] === x && coordinate[1] === y
    );
    const isAlreadyHit = hitCoordinates.some(
      (coordinate) => coordinate[0] === x && coordinate[1] === y
    );

    if (isPartOfShip && !isAlreadyHit) {
      hitCoordinates.push([x, y]);
      return true;
    }
    return false;
  };

  const isSunk = () => hitCoordinates.length === coordinates.length;

  return {
    length,
    setCoordinates,
    getCoordinates,
    hit,
    isSunk,
  };
}

module.exports = Ship;
