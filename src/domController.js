const GameController = require('./gameController');
import './style.css';

const DomController = (() => {
  let game = GameController();
  game.setupShips();

  const playerBoardContainer = document.querySelector('#player-board');
  const computerBoardContainer = document.querySelector('#computer-board');
})();
