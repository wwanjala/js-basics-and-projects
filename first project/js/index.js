"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 26;
// console.log(document.querySelector(".guess").value);

//handling click of a button events(event listener)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    //document.querySelector(".message").textContent = "No number";
    displayMessage("No Number");

    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "correct number!";
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "too high!" : "too low!";
      displayMessage(guess > secretNumber ? "too high!" : "too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "you lost the game";
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing");
  //   document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#00008B";
  document.querySelector(".number").style.width = "5 rem";
});
