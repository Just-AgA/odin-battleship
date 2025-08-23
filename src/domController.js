const GameController = require('./gameController');
import './style.css';

const DomController = (() => {
  let game = GameController();
  game.setupShips();

  const playerBoardContainer = document.querySelector('#player-board');
  const computerBoardContainer = document.querySelector('#computer-board');

  const renderBoard = (boardContainer, gameboard, isEnemy = false) => {
    boardContainer.innerHTML = '';
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = x;
        cell.dataset.y = y;

        const isShipHere = gameboard
          .getShips()
          .some((ship) =>
            ship
              .getCoordinates()
              .some((coord) => coord[0] === x && coord[1] === y)
          );

        const isHit = gameboard
          .getHits()
          .some((coord) => coord[0] === x && coord[1] === y);

        const isMiss = gameboard
          .getMisses()
          .some((coord) => coord[0] === x && coord[1] === y);

        if (isShipHere && !isEnemy) cell.classList.add('ship');
        if (isHit) cell.classList.add('hit');
        if (isMiss) cell.classList.add('miss');

        })();
