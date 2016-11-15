const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect();

global.chai = chai;
global.sinon = sinon;
global.sinonChai = sinonChai;
global.expect = expect;

chai.Should();
chai.use(sinonChai);
