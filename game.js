
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  if (rand == 0) return 'Rock';
  if (rand == 1) return 'Paper';
  if (rand == 2) return 'Scissors';
}

function getHumanChoice() {
  const choice = prompt('Enter Rock, Paper or Scissors: ')
  const token = choice.charAt(0).toLowerCase();
  if (token == 'r') return 'Rock';
  if (token == 'p') return 'Paper';
  if (token == 's') return 'Scissors';
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log(`It's a Tie! You both chose ${humanChoice}.`);
    } else if (humanChoice == 'Rock') {
      if (computerChoice == 'Paper') {
        console.log('You lose! Paper covers Rock.');
        computerScore++;
      } else {
        console.log('You win! Rock breaks Scissors.');
        humanScore++;
      }
    } else if (humanChoice == 'Paper') {
      if (computerChoice == 'Rock') {
        console.log('You win! Paper covers Rock.');
        humanScore++;
      } else {
        console.log('You lose! Scissors cuts Paper.');
        computerScore++;
      }
    } else if (humanChoice == 'Scissors') {
      if (computerChoice == 'Rock') {
        console.log('You lose! Rock breaks Scissors.');
        computerScore++;
      } else {
        console.log('You win! Scissors cuts Paper.');
        humanScore++;
      }
    }
    console.log(`You: ${humanScore}  Cpu: ${computerScore}`);
  }

  for (let i = 1; i < 6; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log('.... Game Over ....');

  if (humanScore > computerScore) {
    console.log('You Win! Humans are best!');
  } else {
    console.log('You Lose! Computers rule!');
  }
}

playGame();
