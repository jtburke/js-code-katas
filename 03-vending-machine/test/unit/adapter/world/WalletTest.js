import Wallet from '../../../../src/adapter/world/Wallet.js';

describe('Wallet', () => {
  let coinStandards;
  let stubFluctuator;
  let stubLogger;

  beforeEach(() => {
    coinStandards = { '10p': { diameter: 1, weight: 2, thickness: 3 } };
    stubFluctuator = { fluctuate: v => v };
    stubLogger = { log: () => {} };
  });

  describe('getCoin', () => {
    it('should make the logger log "Take coin: 10p { d: 1, w: 2, t: 3 }"', () => {
      const log = sinon.spy(stubLogger, 'log');
      const wallet = new Wallet(coinStandards, 0, stubFluctuator, stubLogger);

      wallet.getCoin('10p');

      log.should.have.been.calledWith(wallet, 'Took coin: 10p { d: 1.000, w: 2.000, t: 3.000 }');
    });

    it('should return a fluctuated coin', () => {
      const stub = sinon.stub(stubFluctuator, 'fluctuate');
      const wallet = new Wallet(coinStandards, 0.1, stubFluctuator, stubLogger);

      stub.withArgs(1, 0.1).returns(11);
      stub.withArgs(2, 0.1).returns(12);
      stub.withArgs(3, 0.1).returns(13);

      wallet.getCoin('10p').should.eql({
        diameter: 11,
        weight: 12,
        thickness: 13,
      });
    });
  });
});
