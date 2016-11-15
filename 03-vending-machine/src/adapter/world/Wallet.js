// DO NOT MODIFY

class Wallet {
  /**
   * @typedef {{ diameter: number, weight: number, thickness: number }} coin
   * @param {Object.<string, coin>} coinStandards
   * @param {number} variance
   * @param {Fluctuator} fluctuator
   * @param {Logger} logger
   */
  constructor(coinStandards, variance, fluctuator, logger) {
    this.coinStandards = coinStandards;
    this.variance = variance;
    this.fluctuator = fluctuator;
    this.logger = logger;
  }

  /**
   * @param {string} coinName
   * @returns {{ diameter: number, weight: number, thickness: number }}
   */
  getCoin(coinName) {
    const coin = this.coinStandards[coinName];

    const realCoin = {
      diameter: this.fluctuator.fluctuate(coin.diameter, this.variance),
      weight: this.fluctuator.fluctuate(coin.weight, this.variance),
      thickness: this.fluctuator.fluctuate(coin.thickness, this.variance),
    };

    this.logger.log(this, `Took coin: ${coinName} { d: ${realCoin.diameter.toFixed(3)}, w: ${realCoin.weight.toFixed(3)}, t: ${realCoin.thickness.toFixed(3)} }`);

    return realCoin;
  }
}

export default Wallet;
