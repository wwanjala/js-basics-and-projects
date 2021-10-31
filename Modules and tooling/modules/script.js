//importing module
//import {addToCart,totalQuantity,totalPrice as price} from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price);
//console.log('importing module');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('milk', 4);

//import default export
import add from './shoppingCart.js';
add('pizza', 3);

//module pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 234;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  //make it to public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    orderStock,
  };
})();
ShoppingCart2.addToCart('appple', 3);
ShoppingCart2.orderStock('bread', 5);

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
  cart: [{ product: 'bread', quanity: 5 }],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const sateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(sateDeepClone);

if (module.hot) {
  module.hot.accept();
}
