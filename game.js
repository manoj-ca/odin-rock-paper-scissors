let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

const round = document.createElement("p");
const winner = document.createElement("p");
const score = document.createElement("p");
const result = document.createElement("p");

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  if (rand == 0) return 'Rock';
  if (rand == 1) return 'Paper';
  if (rand == 2) return 'Scissors';
}

function playRound(humanChoice, computerChoice) {
  round.textContent = `Round ${roundNum++}`;
  if (humanChoice == computerChoice) {
    winner.textContent = `It's a Tie! You both chose ${humanChoice}.`;
  } else if (humanChoice == 'Rock') {
    if (computerChoice == 'Paper') {
      winner.textContent = 'You lose! Paper covers Rock.';
      computerScore++;
    } else {
      winner.textContent = 'You win! Rock breaks Scissors.';
      humanScore++;
    }
  } else if (humanChoice == 'Paper') {
    if (computerChoice == 'Rock') {
      winner.textContent = 'You win! Paper covers Rock.';
      humanScore++;
    } else {
      winner.textContent = 'You lose! Scissors cuts Paper.';
      computerScore++;
    }
  } else if (humanChoice == 'Scissors') {
    if (computerChoice == 'Rock') {
      winner.textContent = 'You lose! Rock breaks Scissors.';
      computerScore++;
    } else {
      winner.textContent = 'You win! Scissors cuts Paper.';
      humanScore++;
    }
  }
  score.textContent = `You: ${humanScore}  Cpu: ${computerScore}`;

  if (humanScore > 4 || computerScore > 4) {
    round.textContent = '.... Game Over ....';
    if (humanScore > computerScore) {
      result.textContent = 'Humans are best!';
    } else {
      result.textContent = 'Computers rule!';
    }
    humanScore = 0;
    computerScore = 0;
    roundNum = 1;
  } else {
    result.textContent = 'Game on!'
  }
}

const body = document.querySelector('body');

const rock = document.createElement("button");
rock.textContent = 'Rock';
rock.addEventListener("click", () => {
  playRound('Rock', getComputerChoice());
});
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = 'Paper';
paper.addEventListener("click", () => {
  playRound('Paper', getComputerChoice());
});
body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = 'Scissors';
scissors.addEventListener("click", () => {
  playRound('Scissors', getComputerChoice());
});
body.appendChild(scissors);

const div = document.createElement("div");
div.appendChild(round);
div.appendChild(winner);
div.appendChild(score);
div.appendChild(result);

body.appendChild(div);
