import Logger from '../../src/adapter/world/Logger.js';
import Customer from '../../src/adapter/world/Customer.js';
import Wallet from '../../src/adapter/world/Wallet.js';
import Fluctuator from '../../src/adapter/world/Fluctuator.js';
import VendingMachine from '../../src/adapter/vendor/VendingMachine.js';
import Display from '../../src/adapter/vendor/Display.js';
import ChangeDispenser from '../../src/adapter/vendor/ChangeDispenser.js';
import ProductVendor from '../../src/adapter/vendor/ProductVendor.js';

describe('Vending machine acceptance test', () => {
  const DEBUGGING = true; // TOGGLE TO SEE CONSOLE OUTPUT OF LOGGER

  let logs;
  let customer;
  let display;
  let change;
  let vendor;
  let machine;
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();

    logs = [];
    const coinStandards = {
      '1p': { diameter: 20, weight: 3.6, thickness: 1.7 },
      '2p': { diameter: 26, weight: 7.1, thickness: 2.0 },
      '5p': { diameter: 18, weight: 3.2, thickness: 1.7 },
      '10p': { diameter: 24, weight: 6.5, thickness: 1.9 },
      '20p': { diameter: 21, weight: 5.0, thickness: 1.7 },
      '50p': { diameter: 27, weight: 8.0, thickness: 1.8 },
      '£1': { diameter: 22, weight: 9.5, thickness: 3.2 },
    };

    const logger = new Logger((spell) => {
      DEBUGGING && console.log(spell);
      logs.push(spell);
    });
    const fluctuator = new Fluctuator(() => Math.random());
    const wallet = new Wallet(coinStandards, 0.05, fluctuator, logger);

    customer = new Customer(wallet, logger);
    vendor = new ProductVendor(logger);
    display = new Display(logger);
    change = new ChangeDispenser(logger);

    machine = new VendingMachine({
      logger: logger,
      change: change,
      display: display,
      vendor: vendor,
      stock: {
        'A': {
          '1': { name: 'Healing Salve', qty: 6, price: 100 },
        },
        'B': {
          '3': { name: 'Clarity', qty: 1, price: 75 },
        },
        'C': {
          '2': { name: 'Magic Stick', qty: 5, price: 45 },
          '4': { name: 'Observer Ward', qty: 0, price: 75 },
        },
      },
      accepts: [
        { diameter: coinStandards['5p' ].diameter, weight: coinStandards['5p' ].weight, thickness: coinStandards['5p' ].thickness, value: 5 },
        { diameter: coinStandards['10p'].diameter, weight: coinStandards['10p'].weight, thickness: coinStandards['10p'].thickness, value: 10 },
        { diameter: coinStandards['20p'].diameter, weight: coinStandards['20p'].weight, thickness: coinStandards['20p'].thickness, value: 20 },
        { diameter: coinStandards['50p'].diameter, weight: coinStandards['50p'].weight, thickness: coinStandards['50p'].thickness, value: 50 },
        { diameter: coinStandards['£1' ].diameter, weight: coinStandards['£1' ].weight, thickness: coinStandards['£1' ].thickness, value: 100 },
      ],
    });
  });

  afterEach(() => {
    clock.restore();
  });

  describe('when the vending machine is started', () => {
    it.skip('should display "INSERT COINS"', () => {
      display.getText().should.equal('INSERT COINS');
    });
  });

  describe('when a coin is inserted', () => {
    it.skip('should display £0.05', () => {
      customer.insert('5p', machine);

      display.getText().should.equal('£0.05');
    });

    it.skip('should display £0.10', () => {
      customer.insert('10p', machine);

      display.getText().should.equal('£0.10');
    });

    it.skip('should display £0.20', () => {
      customer.insert('20p', machine);

      display.getText().should.equal('£0.20');
    });

    it.skip('should display £0.50', () => {
      customer.insert('50p', machine);

      display.getText().should.equal('£0.50');
    });

    it.skip('should display £1.00', () => {
      customer.insert('£1', machine);

      display.getText().should.equal('£1.00');
    });

    it.skip('should display £1.85', () => {
      customer.insert('£1', machine);
      customer.insert('20p', machine);
      customer.insert('50p', machine);
      customer.insert('10p', machine);
      customer.insert('5p', machine);

      display.getText().should.equal('£1.85');
    });

    it.skip('should display £1.85', () => {
      customer.insert('£1', machine);
      customer.insert('20p', machine);
      customer.insert('50p', machine);
      customer.insert('10p', machine);
      customer.insert('5p', machine);

      display.getText().should.equal('£1.85');
    });

    it.skip('should return a rejected coin', () => {
      const dispenseRejected = sinon.spy(change, 'dispenseRejected');
      customer.insert('2p', machine);

      display.getText().should.equal('INSERT COINS');
      dispenseRejected.should.have.been.called;
      const rejected = dispenseRejected.getCall(0).args[0];
      rejected.weight.should.be.within(6.745, 7.455);
      rejected.diameter.should.be.within(24.7, 27.3);
      rejected.thickness.should.be.within(1.9, 2.1);
    });
  });

  describe('when a product is selected', () => {
    describe('and the correct amount is inserted', () => {
      it.skip('should dispense a product', () => {
        const vend = sinon.spy(vendor, 'vend');
        customer.insert('£1', machine);
        customer.requestProduct('A', '1', machine);
        vend.should.have.been.calledWith('A', '1');
      });

      it.skip('should display a "THANK YOU" message for 3 seconds and then "INSERT COINS"', () => {
        customer.insert('£1', machine);
        customer.requestProduct('A', '1', machine);

        display.getText().should.equal('THANK YOU');
        clock.tick(2999);
        display.getText().should.equal('THANK YOU');
        clock.tick(1);
        display.getText().should.equal('INSERT COINS');
      });

      it.skip('should display a "THANK YOU" message for 3 seconds and then the remaining balance', () => {
        customer.insert('£1', machine);
        customer.requestProduct('B', '3', machine);

        display.getText().should.equal('THANK YOU');
        clock.tick(2999);
        display.getText().should.equal('THANK YOU');
        clock.tick(1);
        display.getText().should.equal('£0.25');
      });

      describe('and there is no stock left', () => {
        it.skip('should display a "SOLD OUT" message for 3 seconds', () => {
          customer.insert('£1', machine);
          customer.requestProduct('C', '4', machine);

          display.getText().should.equal('SOLD OUT');
          clock.tick(2999);
          display.getText().should.equal('SOLD OUT');
          clock.tick(1);
          display.getText().should.equal('£1.00');
        });
      });
    });

    describe('and the incorrect amount is inserted', () => {
      it.skip('should not dispense a product', () => {
        const vend = sinon.spy(vendor, 'vend');
        customer.insert('10p', machine);
        customer.requestProduct('A', '1', machine);
        vend.should.not.have.been.called;
      });

      it.skip('should display a "PRICE £1.00" message for 3 seconds', () => {
        customer.insert('10p', machine);
        customer.requestProduct('A', '1', machine);

        display.getText().should.equal('PRICE £1.00');
        clock.tick(2999);
        display.getText().should.equal('PRICE £1.00');
        clock.tick(1);
        display.getText().should.equal('£0.10');
      });

      describe('and there is no stock left', () => {
        it.skip('should display a "SOLD OUT" message for 3 seconds', () => {
          customer.insert('10p', machine);
          customer.requestProduct('C', '4', machine);

          display.getText().should.equal('SOLD OUT');
          clock.tick(2999);
          display.getText().should.equal('SOLD OUT');
          clock.tick(1);
          display.getText().should.equal('£0.10');
        });
      });
    });

    describe('and no amount has been inserted', () => {
      it.skip('should not dispense a product', () => {
        const vend = sinon.spy(vendor, 'vend');
        customer.requestProduct('A', '1', machine);
        vend.should.not.have.been.called;
      });

      it.skip('should display a "PRICE £1.00" message for 3 seconds', () => {
        customer.requestProduct('A', '1', machine);

        display.getText().should.equal('PRICE £1.00');
        clock.tick(2999);
        display.getText().should.equal('PRICE £1.00');
        clock.tick(1);
        display.getText().should.equal('INSERT COINS');
      });

      describe('and there is no stock left', () => {
        it.skip('should display a "SOLD OUT" message for 3 seconds', () => {
          customer.requestProduct('C', '4', machine);

          display.getText().should.equal('SOLD OUT');
          clock.tick(2999);
          display.getText().should.equal('SOLD OUT');
          clock.tick(1);
          display.getText().should.equal('INSERT COINS');
        });
      });
    });
  });

  describe('when a customer requests a refund', () => {
    it.skip('should return the current amount', () => {
      const dispense = sinon.spy(change, 'dispense');
      customer.insert('£1', machine);
      customer.insert('20p', machine);
      customer.requestChange(machine);

      dispense.should.have.been.calledWith(120);
      display.getText().should.equal('INSERT COINS');
    });

    it.skip('should not return anything when there is no balance', () => {
      const refund = sinon.spy(change, 'dispense');
      customer.requestChange(machine);

      refund.should.not.have.been.called;
    });
  });
});
