const Gameboard = require('./gameboard');

function Player(isComputer = false) {
  const gameboard = Gameboard();
  const previousMoves = [];

  const getGameboard = () => gameboard;
}

module.exports = Player;
