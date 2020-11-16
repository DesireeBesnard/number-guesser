let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a new target number
const generateTarget = () => {
    const randomTarget = Math.floor(Math.random() * 10);
    return randomTarget;
};

// compareGuesses() determines which player is the closest to the target number
let userGuess;
let computerGuess;
const targetNumber = generateTarget();

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (Math.abs(targetNumber-userGuess) <= Math.abs(targetNumber-computerGuess)) {
    //player won
    return true;
  } else {
    //computer won
    return false;
  }
};

// updateScore() add a point to the winner's score
const updateScore = (winner) => {
    if (winner === 'human') {
      humanScore++;
      console.log(humanScore);
    } else {
      computerScore++;
    }
  };
  


