// MODIFY ME :)

class VendingMachine {
  /** @typedef {{ name: string, qty: number, price: number }} stock */
  /** @typedef {{ diameter: number, weight: number, thickness: number, value: number }} coin */

  /**
   * @param {{}} options
   * @param {Logger} options.logger
   * @param {ChangeDispenser} options.change
   * @param {Display} options.display
   * @param {ProductVendor} options.vendor
   * @param {Object.<string, Object.<string, stock>>} options.stock
   * @param {coin[]} options.accepts
   */
  constructor(options) {
    this.display = options.display;
    this.change = options.change;
    this.vendor = options.vendor;
    this.logger = options.logger;
  }

  /**
   * DO NOT CHANGE SIGNATURE
   * @param {{ diameter: number, weight: number, thickness: number}} inserted
   */
  insert(inserted) {
    this.logger.log(this, `insert { d: ${inserted.diameter.toFixed(3)}, w: ${inserted.weight.toFixed(3)}, t: ${inserted.thickness.toFixed(3)}}`);
  }

  /**
   * DO NOT CHANGE SIGNATURE
   * @param {string} row
   * @param {string} col
   */
  requestProduct(row, col) {
    this.logger.log(this, `product requested ${row}${col}`);
  }

  /**
   * DO NOT CHANGE SIGNATURE
   */
  requestChange() {
    this.logger.log(this, 'change requested');
    this.change.dispense(120);
  }
}

export default VendingMachine;
