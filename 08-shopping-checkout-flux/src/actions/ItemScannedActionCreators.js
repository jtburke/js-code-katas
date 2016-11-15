const ShoppingCheckoutDispatcher = require('../dispatcher/CheckoutDispatcher');
const CheckoutConstants = require('../constants/CheckoutConstants');

const ActionTypes = CheckoutConstants.ActionTypes;

module.exports = {
  scan: (sku) => {
    ShoppingCheckoutDispatcher.dispatch({
      type: ActionTypes.ITEM_SCANNED,
      sku: sku,
    });
  }
};