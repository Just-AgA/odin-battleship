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

        if (isEnemy) {
          cell.addEventListener('click', () => handlePlayerAttack(x, y));
        }

        boardContainer.appendChild(cell);
      }
    }
  };

  const handlePlayerAttack = (x, y) => {
    if (game.isGameOver()) return;

    const result = game.takeTurn(x, y);
    if (result === null) return;

    renderBoard(computerBoardContainer, game.computer.getGameboard(), true);
    renderBoard(playerBoardContainer, game.player.getGameboard(), false);

    if (game.isGameOver()) return announceWinner();

    // Computer turn delay
    setTimeout(() => {
      const { result, x, y } = game.computerTurn();
      renderBoard(computerBoardContainer, game.computer.getGameboard(), true);
      renderBoard(playerBoardContainer, game.player.getGameboard(), false);

      if (game.isGameOver()) announceWinner();
    }, 500);
  };

  const announceWinner = () => {
    const winner = game.player.getGameboard().allShipsSunk()
      ? 'Computer wins!'
      : 'You win!';
    const winnerAnnounce = document.querySelector('#winner');
    winnerAnnounce.innerHTML = `<h1>${winner}</h1>`;

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Restart Game';

    resetBtn.addEventListener('click', () => {
      // Clear current game state
      winnerAnnounce.innerHTML = '';

      DomController.init();
    });

    winnerAnnounce.appendChild(resetBtn);
  };

 )();
