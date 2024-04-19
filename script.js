// randomly generates a choice for the computer
function getComputerChoice() {
  const selection = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * selection.length);
  return selection[random];
}

const computerSelection = getComputerChoice();

//  plays one round of the game
function playRound(playerSelection, computerSelection) {
  console.log("Players selection: " + playerSelection.toUpperCase());
  console.log("Computers selection: " + computerSelection.toUpperCase());
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper!";
  } else if (playerSelection.toLowerCase() == computerSelection) {
    return "No one wins! It's a tie!";
  } else {
    return "Player did not make a choice";
  }
}
