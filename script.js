"use strict";

let scoreBox = document.querySelector(".score");
let highscoreBox = document.querySelector(".highscore");

const buttonCheck = document.querySelector(".check");
const buttonAgain = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessageHandler = (message) => {
  document.querySelector(".message").textContent = message;
};

const secretNumberHandler = (secretNumber, width) => {
  let secretNumberBox = document.querySelector(".number");

  secretNumberBox.style.width = width;
  secretNumberBox.textContent = secretNumber;
}

const backgroundColorHandler = (color) => {
  document.querySelector("body").style.backgroundColor = color;
}

buttonCheck.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // no input check
  if (!guess) {
    displayMessageHandler('No number!');

    // quess is correct
  } else if (guess === secretNumber) {
    displayMessageHandler("Correct number!");
    backgroundColorHandler("#60b347");
    secretNumberHandler(secretNumber, "30rem");

    if (score > highscore) {
      highscore = score;
      highscoreBox.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessageHandler(guess > secretNumber ? "Too high!" : "Too low!")
      score--;
      scoreBox.textContent = score;
    } else {
      displayMessageHandler("You lost the game!");
      scoreBox.textContent = 0;
    }
  }
});

buttonAgain.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  scoreBox.textContent = score;
  secretNumberHandler("?", "15rem");
  backgroundColorHandler("#222");
  displayMessageHandler("Start guessing...");
  document.querySelector(".guess").value = "";
});
