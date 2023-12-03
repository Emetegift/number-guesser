/*
GAME FUNCTION
- player must guess a number between a min and max
- player must get a certain amount of guess
- Notify player of guesses remaining
- let player choose to lay again
*/

// Game values

let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements

const game = document.querySelector("#game"),
  miniNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max values
miniNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    // console.log(1);
    window.location.reload();
  }
});

//Listen for guess button

guessBtn.addEventListener("click", function () {
  //To convert the input from a string to a number

  let guess = parseInt(guessInput.value);

  // To validate the input, that is making sure it not blank, and it is not less than the minimum nor above the maximum
  if (isNaN(guess) || guess < min || guess > max)
    setMessage(`please enter a number between ${min} and ${max}`, "red"); // For error message

  // Check if won

  if (guess === winningNum) {
    //Game over, won
    gameOver(true, `${winningNum} is correct !!`);
  } else {
    // In the Loose case, 1  is subratcted from the guesses left
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game over, Lost

      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      guessInput.style.borderColor = "red";

      // Clear input
      guessInput.value = "";
      // Tell the user the number of guesses left
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, "red");
    }
  }
});

//Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //disable input
  guessInput.disabled = true;

  //Change border color to show that user has won
  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color;
  setMessage(msg);

  // To set play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
