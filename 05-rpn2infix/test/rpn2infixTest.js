import rpn2infix from '../src/rpn2infix.js';

describe('rpn2infix', () => {
  it('"3 4 2 * 1 5 - 2 3 ^ ^ / +" should convert to "3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3"', () => {
    rpn2infix('1 2 + 4 * 5 + 3 -').should.equal('3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3');
  });

  it('"5 1 2 + 4 * + 3 −" should equal "( ( 1 + 2 ) ^ ( 3 + 4 ) ) ^ ( 5 + 6 )"', () => {
    rpn2infix('1 2 + 3 4 + ^ 5 6 + ^').should.equal('( ( 1 + 2 ) ^ ( 3 + 4 ) ) ^ ( 5 + 6 )');
  });
});
