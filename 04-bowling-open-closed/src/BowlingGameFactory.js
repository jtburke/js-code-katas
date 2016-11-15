import BowlingGame from './BowlingGame.js';

class BowlingGameFactory {
  constructor() {

  }

  create() {
    return new BowlingGame();
  }
}

export default BowlingGameFactory;
