const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

// console.log(getRandomComputerResult());

// hasPlayerWonTheRound has two params
  // : player and computer
// func should return true if player won the round
// false if player lost or tied round
// criteria for player to win a round:
  // if player chose "Rock" and comp chose "Scissors"
  // if player chose "Scissors" and comp chose "paper"
  // if player chose "paper" and comp chose "Rock"

const hasPlayerWonTheRound = (player, computer) => {
  if (player === computer) {
    return false;
  } else if ((player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")) {
    return true;
  } else {
    return false;
  }
}

// to test the func:
/*
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
*/

// if player wins round, update the "playerScore" by 1
// and return the msg "Player wins! [player's choice] beats [computer's choice]"
// if the comp and player choose the same option,
// return the msg "it's a tie! Both chose [player's choice]"
// if the comp wins the round, update the "computerScore" by 1
// and return the msg "Computer wins! [computer's choice] beats [player's choice]"
// [computer's choice] should be replaced with "computerResult" while
// [player's choice] should be replaced with the "userOption"
const getRoundResults = (userOption) => {
  const computerResult = getRandomComputerResult();
  
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// to test the func:
/*
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
*/

const playerScoreSpanElems = document.getElementById('player-score');
const computerScoreSpanElems = document.getElementById('computer-score');
const roundResultsMsg = document.getElementById('results-msg');
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// showResults func should update the
// computerScoreSpanElems to show the updated score
// of the comp
// the showResults func will need to check if the player or comp has reached three points
// if either has reached three points,
// display a message indicating the winner
// you should update the winnerMsgElement if there is a winner.
const showResults = (userOption) => {
  const roundResults = getRoundResults(userOption);
  roundResultsMsg.textContent = roundResults;
  computerScoreSpanElems.textContent = computerScore;
  playerScoreSpanElems.textContent = playerScore;

  if (playerScore === 3) {
    winnerMsgElement.textContent = "Player has won the game!";
  } else if (computerScore === 3) {
    winnerMsgElement.textContent = "Computer has won the game!";
  }

  // if theres a winner, show the resetGamebtn
  // hide the optionsContainer

  if (playerScore === 3 || computerScore === 3) {
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  } else {
    optionsContainer.style.display = "flex";
    resetGameBtn.style.display = "none";
  }
}

showResults("Rock");

// if the player or comp has won the game,
// there should be an option to reset the game
// and play again

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  roundResultsMsg.innerText = "";
  computerScoreSpanElems.textContent = computerScore;
  playerScoreSpanElems.textContent = playerScore;
  winnerMsgElement.innerText = "";
  optionsContainer.style.display = "flex";
  resetGameBtn.style.display = "none";
}


resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});


