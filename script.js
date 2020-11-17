let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a new target number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// declaration of the variables needed parameters in compareGuesses()
let userGuess;
const computerGuess = generateTarget();
const targetNumber = generateTarget();

// compareGuesses() determines which player is the closest to the target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (Math.abs(targetNumber-userGuess) <= Math.abs(targetNumber-computerGuess)) {
    //player won
    return true;
  } else {
    //computer won
    return false;
  }
};

let winner;
if (compareGuesses(userGuess, computerGuess, targetNumber)) {
  winner = 'human';
} else {
  winner = 'computer';
}

// updateScore() add a point to the winner's score
const updateScore = (winner) => {
    if (winner === 'human') {
      humanScore++;
      console.log(`human score is : ${humanScore}`);
    } else {
      computerScore++;
      console.log(`computer score is : ${computerScore}`);
    }
  };
  
  // add 1 to the round number
  const advanceRound = () => {
    currentRoundNumber++;
  };


