// DO NOT MODIFY

class ChangeDispenser {
  /** @param {Logger} logger */
  constructor(logger) {
    this.logger = logger;
  }

  /** @param {{ diameter: number, weight: number, thickness: number}} rejected */
  dispenseRejected(rejected) {
    this.logger.log(this, `Returned rejected object { d: ${rejected.diameter.toFixed(3)}, w: ${rejected.weight.toFixed(3)}, t: ${rejected.thickness.toFixed(3)} }`);
  }

  /** @param {number} value */
  dispense(value) {
    this.logger.log(this, `Dispense ${value}`);
  }
}

export default ChangeDispenser;
