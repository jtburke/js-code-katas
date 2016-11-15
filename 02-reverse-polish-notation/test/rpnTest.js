import {rpn} from '../src/rpn';

describe('Reverse Polish Notation', () => {
  // comment this test out after you start and then add
  // functionality using baby steps until this passes.
  it('"1 2 + 4 * 5 + 3 -" should equal 14', () => {
    rpn('1 2 + 4 * 5 + 3 -').should.equal(14);
  });

  it('"5 1 2 + 4 * + 3 −" should equal 14', () => {
    rpn('5 1 2 + 4 * + 3 −').should.equal(14);
  });
});
