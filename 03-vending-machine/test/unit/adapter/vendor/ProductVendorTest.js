import ProductVendor from '../../../../src/adapter/vendor/ProductVendor.js';

describe('ProductVendor', () => {
  describe('vend', () => {
    it('should make the logger log "hello"', () => {
      const logger = {
        log: () => {},
      };
      const log = sinon.spy(logger, 'log');
      const vendor = new ProductVendor(logger);

      vendor.vend('A', '1');

      log.should.have.been.calledWith(vendor, 'vend A1');
    });
  });
});
