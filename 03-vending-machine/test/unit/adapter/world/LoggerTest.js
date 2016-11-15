import Logger from '../../../../src/adapter/world/Logger.js';

describe('Logger', () => {
  describe('log', () => {
    it('should output the source and the message', () => {
      const fire = sinon.stub();
      const logger = new Logger(fire);
      const caller = { constructor: { name: 'MyClazz'} };

      logger.log(caller, 'hello');

      fire.should.have.been.calledWith('[MyClazz] hello');
    });
  });
});
