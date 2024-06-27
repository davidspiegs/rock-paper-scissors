const choices = ['rock', 'paper', 'scissors'];

let currentRound = 1;
let displayRound = 1;
const maxRounds = 6;

const outcomes = {
  // Refers to player's choice
  WIN_ROCK: "Rock beats scissors! 1 point for you.",
  LOSE_ROCK: "Paper beats rock! 1 point for the computer.",
  WIN_PAPER: "Paper beats rock! 1 point for you.",
  LOSE_PAPER: "Scissors beats paper! 1 point for the computer.",
  WIN_SCISSORS: "Scissors beats paper! 1 point for you.",
  LOSE_SCISSORS: "Rock beats scissors! 1 point for the computer.",
  TIE: "It's a tie!",
};

const playerDisplayChoice = document.getElementById("playerDisplayChoice");
const computerDisplayScore = document.getElementById("computerDisplayScore");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

// Function that updates scores
function updateScores(result) {
  if (result.includes("1 point for you")) {
    playerScore++;
  } else if (result.includes("1 point for the computer")) {
    computerScore++;
  }
}

// Player & Computer Score, both defined as 0 to start
let playerScore = 0;
let computerScore = 0;

// Capitalizes the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~ MAIN LOGIC FUNCTION ~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function playGame(playerChoice) {
  
if (currentRound >= maxRounds) {
  alert("The game is finished! Please refresh the page to play again.");
  return;
}
  
  if (currentRound < maxRounds) {
      currentRound++;
      if (displayRound < maxRounds - 1) {
          displayRound++;
      }
  }

  document.getElementById("displayRound").textContent = displayRound;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  let result = "";
  if (playerChoice === computerChoice) {
    result = outcomes.TIE;
  }
  else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? outcomes.WIN_ROCK : outcomes.LOSE_ROCK;
        break;
      case "paper":
        result = (computerChoice === "rock") ? outcomes.WIN_PAPER : outcomes.LOSE_PAPER;
        break;
      case "scissors":
        result = (computerChoice === "paper") ? outcomes.WIN_SCISSORS : outcomes.LOSE_SCISSORS;
        break;
    }
  }

  // Displays player choice
  playerDisplayChoice.textContent = `${capitalizeFirstLetter(playerChoice)}`;
  computerDisplayChoice.textContent = `${capitalizeFirstLetter(computerChoice)}`;
  
  // Update the score
  updateScores(result);
  
  // Displays result of the round
  resultDisplay.textContent = result;

  // Update displayed score
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Increment and update

  if (currentRound >= maxRounds) {
    declareWinner();
    return;
  }
  
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~END OF MAIN FUNCTION~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~


// Declares winner of the game
function declareWinner() {
  let winnerMessage = "";
  if (playerScore > computerScore) {
    winnerMessage = "Congratulations! You won the game.";
  } else if (computerScore > playerScore) {
    winnerMessage = "Game over! The computer wins.";
  } else {
    winnerMessage = "It's a tie!";
  }
  document.getElementById("winnerMessage").textContent = winnerMessage;
}