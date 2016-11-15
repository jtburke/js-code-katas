// DO NOT MODIFY

class Customer {
  constructor(wallet, logger) {
    this.wallet = wallet;
    this.logger = logger;
  }

  /**
   * @param {string} coinName
   * @param {VendingMachine} vendingMachine
   */
  insert(coinName, vendingMachine) {
    this.logger.log(this, `Insert ${coinName} coin`);
    const coin = this.wallet.getCoin(coinName);
    vendingMachine.insert(coin);
  }

  /**
   * @param {string} row
   * @param {string} col
   * @param {VendingMachine} vendingMachine
   */
  requestProduct(row, col, vendingMachine) {
    this.logger.log(this, `Request ${row}${col}`);
    vendingMachine.requestProduct(row, col);
  }

  requestChange(vendingMachine) {
    this.logger.log(this, 'Change requested');
    vendingMachine.requestChange();
  }
}

export default Customer;
