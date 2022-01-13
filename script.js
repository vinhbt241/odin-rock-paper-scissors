const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const MAXPOINT = 5;

const buttons = document.querySelectorAll(".choices");
const playerScore = document.querySelector("#score #player-score h2");
const computerScore = document.querySelector("#score #computer-score h2");
const buttonReset = document.querySelector("#reset");
const playerMessage = document.querySelector("#player-message");
const computerMessage = document.querySelector("#computer-message");
const message = document.querySelector("#message");

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    playerMessage.textContent = `Your choice is ${playerSelection}`;
    computerMessage.textContent = `Computer's choice is ${computerSelection}`;
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

function updateScore(result) {
    if (result == 1) {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if (result == -1) {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
}

function checkWin() {
    if (Number(playerScore.textContent) >=5 || Number(computerScore.textContent) >= 5) {
        buttons.forEach(button => button.disabled = true);
        if (Number(playerScore.textContent) > Number(computerScore.textContent)) {
            message.textContent = "Congratulation, you won the game!";
        } else {
            message.textContent = "Oops, you lost, maybe next time?";
        }
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        updateScore(result);
        checkWin();
    })
})

buttonReset.addEventListener("click", () => {
    buttons.forEach(button => button.disabled = false);
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerMessage.textContent = "";
    computerMessage.textContent = "";
    message.textContent = "Make your move...";
})




