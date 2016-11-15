// DO NOT MODIFY

class Display {
  constructor(logger) {
    this.message = '';
    this.logger = logger;
  }

  /** @param {string} message */
  setText(message) {
    this.message = message;
    this.logger.log(this, `"${message}"`);
  }

  getText() {
    return this.message;
  }
}

export default Display;
