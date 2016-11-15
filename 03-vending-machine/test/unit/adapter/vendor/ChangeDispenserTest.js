import ChangeDispenser from '../../../../src/adapter/vendor/ChangeDispenser.js';

describe('Change Dispenser', () => {
  let stubLogger;

  beforeEach(() => {
    stubLogger = {
      log: () => {},
    };
  });

  describe('dispenseRejected', () => {
    it('should make the logger log "hello"', () => {
      const log = sinon.spy(stubLogger, 'log');
      const change = new ChangeDispenser(stubLogger);

      change.dispenseRejected({
        diameter: 1,
        weight: 2,
        thickness: 3,
      });

      log.should.have.been.calledWith(change, 'Returned rejected object { d: 1.000, w: 2.000, t: 3.000 }');
    });
  });

  describe('dispense', () => {
    it('should make the logger log "Dispense 120"', () => {
      const log = sinon.spy(stubLogger, 'log');
      const change = new ChangeDispenser(stubLogger);

      change.dispense(120);

      log.should.have.been.calledWith(change, 'Dispense 120');
    });
  });
});
