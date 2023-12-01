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
  winingNum = 2,
  guessLeft = 3;

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

//Listen for guess button

guessBtn.addEventListener("click", function () {
  //To convert the input from a string to a number

  let guess = parseInt(guessInput.value);

  // To validate the input, that is making sure it not blank, and it is not less than the minimum nor above the maximum
  if (isNaN(guess) || guess < min || guess > max)
    setMessage(`please enter a number between ${min} and ${max}`, "red"); // For error message

  // Check if won

  if (guess === winingNum) {
    //disable input
    guessInput.disabled = true;

    //Change border color to show that user has won
    guessInput.style.borderColor = "green";
    setMessage(`${winingNum} is correct, YOU WIN`, "green");
  } else {
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
