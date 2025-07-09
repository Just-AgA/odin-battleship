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
}

module.exports = Ship;
