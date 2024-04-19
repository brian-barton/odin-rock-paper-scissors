// randomly generates a choice for the computer
function getComputerChoice() {
  const selection = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * selection.length);
  return selection[random];
}

const computerSelection = getComputerChoice();

// plays one round of the game
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

// creates a for loop to play 5 rounds and initialize a scoring system to track the scores for each round then at the end of the 5 rounds logs the winner overall
function playGame(rounds = 5) {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt("Rock! Paper! Scissors! Shoot!");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    switch (result) {
      case "You Lose! Paper beats Rock!":
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
      case "You Win! Paper beats Rock!":
        console.log("You Win! Paper beats Rock!");
        playerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
      case "You Win! Rock beats Scissors!":
        console.log("You Win! Rock beats Scissors!");
        playerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
      case "You Lose! Rock beats Scissors!":
        console.log("You Lose! Rock beats Scissors!");
        computerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
      case "You Lose! Scissors beats Paper!":
        console.log("You Lose! Scissors beats Paper!");
        computerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
      case "You Win! Scissors beats Paper!":
        console.log("You Win! Scissors beats Paper!");
        playerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
      case "No one wins! It's a tie!":
        console.log("No one wins! It's a tie!");
        computerScore++;
        playerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        break;
    }
  }
  console.log("Final Results: Player: " + playerScore + " Computer: " + computerScore);
  if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
  } else if (playerScore < computerScore) {
    console.log("You lost! Try again!");
  } else {
    console.log("It's a tie! No one wins!");
  }
}

playGame();
