// // Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from "./shoppingCart.js";

// addToCart("bread", 5);

// console.log(price, totalQuantity);

console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 10);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add("bread", 15);
add("pizza", 2);
add("apples", 4);

console.log(cart);
