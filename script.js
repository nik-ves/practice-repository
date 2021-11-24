"use strict";

// let message = (document.querySelector(".message").textContent = "test");
// let number = document.querySelector(".number");
// let score = document.querySelector(".score");
// let inputField = document.querySelector(".guess").value = 23;

// console.log(inputField)

const button = document.querySelector(".check");

button.addEventListener("click", () => {
  const inputField = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");

  console.log(inputField, typeof inputField);

  // checking if there is no input
  if (!inputField) {
    document.querySelector(".message").textContent = "No number";
  }
});
