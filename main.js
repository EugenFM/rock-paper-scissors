// ROCK, PAPER, SCISSORS
// function to get the User's choice
function getUserChoice (userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error! Type "rock", "paper" or "scissors", please!');
  }
}
getUserChoice('Rock');


// function to generate computer's choice
const getComputerChoice = function () {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else if (computerChoice === 2) {
    return 'scissors';
  }
}
console.log(getComputerChoice());

const determineWinner = (userInput, computerChoice) => {
  if (userInput === computerChoice) {
    return 'It was a tie!';
  } 

  if (userInput === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }
  }

  if (userInput === 'paper') {
    if (computerChoice === 'scissors' ) {
      return 'Computer wins!';
    } else {
      return 'User wins';
    }
  }
}

 const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
 }

 playGame();