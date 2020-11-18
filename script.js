/*
8: initialization
58: fonctions needed
92: game session
132: next round
*/

// START INITIALIZATION

let currentRoundNumber = 1;
const roundNumberDisplay = document.getElementById('round-number');

let targetNumber;
const targetNumberDisplay = document.getElementById('target-number');

let computerScore = 0;
const computerScoreDisplay = document.getElementById('computer-score');
const computerGuessDisplay = document.getElementById('computer-guess');
const computerWinsDisplay = document.getElementById('computer-wins');

let humanScore = 0;
const humanScoreDisplay = document.getElementById('human-score');
const nextRoundButton = document.getElementById('next-round');
const humanGuessInput = document.getElementById('human-guess');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
  if (value > 0 && value <= 8) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value >= 9) {
    addButton.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractButton.setAttribute('disabled', true);
  }
}

humanGuessInput.addEventListener('input', function(e) {
  handleValueChange(e.target.value);
});

const guessButton = document.getElementById('guess');

// END INITIALIZATION

// START FONCTIONS NEEDED

// Generate a new target number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// compareGuesses() determines which player is the closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (Math.abs(targetNumber-humanGuess) <= Math.abs(targetNumber-computerGuess)) {
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
    } else {
      computerScore++;
    }
  };
  
  // add 1 to the round number
  const advanceRound = () => {
    currentRoundNumber++;
  };

// END FONCTIONS NEEDED

// START GAME SESSION 

guessButton.addEventListener('click', () => {
  // Generate the target value
  targetNumber = generateTarget();
   // Make a random 'computer guess'
   const computerGuess = generateTarget();
  // Retrieve the player's guess
  const humanGuess = humanGuessInput.value;

  // Display the computer guess and the target
  targetNumberDisplay.innerText = targetNumber;
  computerGuessDisplay.innerText = computerGuess;
  
  // Determine if the human or computer wins:
  const humanIsWinner = compareGuesses(humanGuess, computerGuess, targetNumber );
  let winner;

  if (humanIsWinner) {
    winner = 'human';
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text');
  } else {
    winner = 'computer';
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  // Update the correct score:
  updateScore(winner);

  // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

  // Display the current scores:
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  
  // Set the correct disabled state for the buttons
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});
  
// END GAME SESSION 

// START NEXT ROUND

nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();
  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display:
  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');
});

// END NEXT ROUND


