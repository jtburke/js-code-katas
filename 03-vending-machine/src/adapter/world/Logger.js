// DO NOT MODIFY

class Logger {
  /** @param {function} fire */
  constructor(fire) {
    this.fire = fire;
  }

  /**
   * @param {*} source
   * @param {string} message
   */
  log(source, message) {
    this.fire(`[${source.constructor.name}] ${message}`);
  }
}

export default Logger;
