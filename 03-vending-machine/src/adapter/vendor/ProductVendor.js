// DO NOT MODIFY

class ProductVendor {
  /**
   * @param {Logger} logger
   */
  constructor(logger) {
    this.logger = logger;
  }

  /**
   * @param {string} row
   * @param {string} col
   */
  vend(row, col) {
    this.logger.log(this, `vend ${row}${col}`);
  }
}

export default ProductVendor;
