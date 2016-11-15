jest.autoMockOff();

describe('Integration Test', () => {
  let ItemScannedActionCreators;
  let ItemStore;

  beforeEach(() => {
    ItemScannedActionCreators = require('../actions/ItemScannedActionCreators');
    ItemStore = require('../stores/ItemStore');
  });

  describe('when an item is scanned', () => {
    const MAX_WAIT = 0;
    let done;

    beforeEach(() => {
      done = false;
    });

    it('should add to item store', () => {
      waitsFor(() => {
        return done;
      }, 'change listener should be called', MAX_WAIT);

      ItemStore.addChangeListener(() => { done = true; });
      ItemScannedActionCreators.scan('abc');

      runs(() => {
        expect(ItemStore.getAll()).toEqual(['abc']);
      });
    });
  })
});