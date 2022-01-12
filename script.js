const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const MAXPOINT = 5;

const buttons = document.querySelectorAll(".choices");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final-result");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    player.textContent = `Your choice is ${playerSelection}`;
    computer.textContent = `Computer's choice is ${computerSelection}`;
    if (playerSelection === computerSelection) {
        message.textContent = "Tie Game!";
        return 0;
    }
    if (playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            message.textContent = "You Lose! Paper beats Rock";
            return -1;
        } else {
            message.textContent = "You Win! Rock beats Scissors";
            return 1;
        }
    }
    if (playerSelection === "PAPER") {
        if(computerSelection === "SCISSORS") {
            message.textContent = "You Lose! Scissors beats Paper";
            return -1;
        } else {
            message.textContent = "You Win! Paper beats Rock"
            return 1;
        }
    }
    if (playerSelection === "SCISSORS") {
        if(computerSelection === "ROCK") {
            message.textContent = "You Lose! Rock beats Scissors";
            return -1;
        } else {
            message.textContent = "You Win! Scissors beats Paper"
            return 1;
        }
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        result = playRound(button.id, computerPlay());
        if (result == 1) {
            playerScore += 1;
        } else if (result == -1) {
            computerScore += 1;
        }
        score.textContent = `Player's score: ${playerScore} | Computer's score: ${computerScore}`
        if (playerScore >= MAXPOINT || computerScore >= MAXPOINT) {
            finalResult.textContent = "";
            if (playerScore > computerScore) {
                finalResult.textContent = "You won!";
            } else {
                finalResult.textContent ="You lose!";
            }
        }
    })
})


