import BowlingGameFactory from '../src/BowlingGameFactory.js';

describe('BowlingGameFactory', () => {
  it('should score 0 for a gutter game', () => {
    const game = new BowlingGameFactory().create();

    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }

    game.score().should.equal(0);
  });
});
