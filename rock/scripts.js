const form = document.querySelector("form");
const playButton = document.getElementById("playButton");
const resetButton = document.getElementById("resetButton");
const resultElement = document.getElementById("result");
const compResultElement = document.getElementById("computer-result");
const scoreElement = document.getElementById("score");
let compSelection = "";
let selectedOption = "";

function computerTurn() {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num <= 3) {
    console.log("Rock");
    compSelection = "Rock";
  } else if (num <= 7) {
    console.log("Paper");
    compSelection = "Paper";
  } else {
    console.log("Scissors");
    compSelection = "Scissors";
  }
  console.log(num);
  return compSelection;
}
resetButton.classList.add("hidden");
playButton.classList.remove("hidden");

function playGame(userSelection, compSelection) {
  let winner = null;
  if (userSelection === compSelection) {
    winner = "tie";
  } else if (
    (userSelection === "Rock" && compSelection === "Scissors") ||
    (userSelection === "Paper" && compSelection === "Rock") ||
    (userSelection === "Scissors" && compSelection === "Paper")
  ) {
    winner = "user";
  } else {
    winner = "computer";
  }
  return winner;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission

  const selectedOption = form.elements["myDropdown"].value;
  if (selectedOption === "") {
    // Show an error message to the user and prevent the form submission
    alert("Please select an option!");
    return;
  }

  resultElement.textContent = `You: ${selectedOption}`;
  const compSelection = computerTurn();
  compResultElement.textContent = `Computer: ${compSelection}`;
  resetButton.classList.remove("hidden");
  playButton.classList.add("hidden");

  const winner = playGame(selectedOption, compSelection);

  switch (winner) {
    case "tie":
      scoreElement.textContent = `You tie! :|`;
      break;
    case "computer":
      scoreElement.textContent = `You lose! :(`;
      break;
    case "user":
      scoreElement.textContent = `You Win! :) `;
      break;
  }
});

form.addEventListener("reset", (event) => {
  event.preventDefault(); // prevent form submission
  resultElement.textContent = ``;
  compResultElement.textContent = ``;
  scoreElement.textContent = ``;
  resetButton.classList.add("hidden");
  playButton.classList.remove("hidden");
  form.elements["myDropdown"].selectedIndex = 0;
});
