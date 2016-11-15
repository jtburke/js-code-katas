import Customer from '../../../../src/adapter/world/Customer.js';

describe('Customer', () => {
  let stubWallet;
  let stubLogger;
  let stubVendingMachine;

  beforeEach(() => {
    stubWallet = {
      getCoin: () => {},
    };
    stubLogger = {
      log: () => {},
    };
    stubVendingMachine = {
      insert: () => {},
      requestProduct: () => {},
      requestChange: () => {},
    };
  });

  describe('inserting', () => {
    it('should make the logger log "Insert 10p coin"', () => {
      const log = sinon.spy(stubLogger, 'log');
      const customer = new Customer(stubWallet, stubLogger);

      customer.insert('10p', stubVendingMachine);

      log.should.have.been.calledWith(customer, 'Insert 10p coin');
    });

    it('should take a coin from the wallet', () => {
      const getCoin = sinon.spy(stubWallet, 'getCoin');
      const customer = new Customer(stubWallet, stubLogger);

      customer.insert('10p', stubVendingMachine);

      getCoin.should.have.been.calledWith('10p');
    });

    it('should insert coin from wallet into vending machine', () => {
      const insert = sinon.spy(stubVendingMachine, 'insert');
      const customer = new Customer(stubWallet, stubLogger);
      const coin = {};
      sinon.stub(stubWallet, 'getCoin').returns(coin);

      customer.insert('10p', stubVendingMachine);

      insert.should.have.been.calledWith(coin);
    });
  });

  describe('request product', () => {
    it('should make the logger log "Request A2"', () => {
      const log = sinon.spy(stubLogger, 'log');
      const customer = new Customer(stubWallet, stubLogger);

      customer.requestProduct('A', '2', stubVendingMachine);

      log.should.have.been.calledWith(customer, 'Request A2');
    });

    it('should make request (A, 2) from the vending machine', () => {
      const request = sinon.spy(stubVendingMachine, 'requestProduct');
      const customer = new Customer(stubWallet, stubLogger);

      customer.requestProduct('A', '2', stubVendingMachine);

      request.should.have.been.calledWith('A', '2');
    });
  });

  describe('request refund', () => {
    it('should make the logger log "change requested"', () => {
      const log = sinon.spy(stubLogger, 'log');
      const customer = new Customer(stubWallet, stubLogger);

      customer.requestChange(stubVendingMachine);

      log.should.have.been.calledWith(customer, 'Change requested');
    });

    it('should make request refund from the vending machine', () => {
      const request = sinon.spy(stubVendingMachine, 'requestChange');
      const customer = new Customer(stubWallet, stubLogger);

      customer.requestChange(stubVendingMachine);

      request.should.have.been.called;
    });
  });
});
