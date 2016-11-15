jest.dontMock('../ItemStore');

describe('ItemStore', () => {
  let CheckoutDispatcher;
  let ItemStore;
  let callback;

  beforeEach(() => {
    CheckoutDispatcher = require('../../dispatcher/CheckoutDispatcher');
    ItemStore = require('../ItemStore');
    // whats this callback thing? see -> https://facebook.github.io/flux/docs/testing-flux-applications.html#testing-stores
    callback = CheckoutDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', () => {
    expect(CheckoutDispatcher.register.mock.calls.length).toBe(1);
  });
});