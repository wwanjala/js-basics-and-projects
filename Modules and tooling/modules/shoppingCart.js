//importing module
console.log('exporting module');

export const shippingCost = 10;
const cart = [];

//named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 234;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
import 'core-js/stable';

//polifilling async functions
import 'regenerator-runtime/runtime'
