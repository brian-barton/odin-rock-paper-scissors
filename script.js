// randomly generates a choice for the computer
function getComputerChoice() {
  const selection = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * selection.length);
  return selection[random];
}

const computerSelection = getComputerChoice();
