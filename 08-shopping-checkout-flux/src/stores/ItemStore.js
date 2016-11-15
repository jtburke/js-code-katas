const assign = require('object-assign');
const EventEmitter = require('events').EventEmitter;
const CheckoutDispatcher = require('../dispatcher/CheckoutDispatcher');
const CheckoutConstants = require('../constants/CheckoutConstants');

const ActionTypes = CheckoutConstants.ActionTypes;

const CHANGE_EVENT = 'change';
const _items = [];

const ItemStore = assign({}, EventEmitter.prototype, {
  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function getAll() {
    return _items.slice(0);
  },
});

ItemStore.dispatchToken = CheckoutDispatcher.register((action) => {
  switch (action.type) {
  case ActionTypes.ITEM_SCANNED:
    _items.push(action.sku);
    ItemStore.emitChange();
    break;
  default:
    // do nothing
  }
});

module.exports = ItemStore;