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

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
lastPost.then((last) => console.log(last));

//////////////////////////////////////////////

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);

state.user.loggedIn = false;

console.log(stateDeepClone);

//////////////////////////////////////////////

// code that only parcel understands
// prevents reloading on save
if (module.hot) {
  module.hot.accept();
}
