import Display from '../../../../src/adapter/vendor/Display.js';

describe('Display', () => {
  describe('setText', () => {
    it('should make the logger log "hello"', () => {
      const logger = {
        log: () => {},
      };

      sinon.stub(logger);
      const display = new Display(logger);

      display.setText('hello');

      logger.log.should.have.been.calledWith(display, '"hello"');
    });
  });
});
