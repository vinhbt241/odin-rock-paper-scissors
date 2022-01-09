const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return "Tie Game!";
    }
    if (playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection === "PAPER") {
        if(computerSelection === "SCISSORS") {
            return("You Lose! Scissors beats Paper");
        } else {
            return("You Win! Paper beats Rock");
        }
    }
    if (playerSelection === "SCISSORS") {
        if(computerSelection === "ROCK") {
            return("You Lose! Rock beats Scissors");
        } else {
            return("You Win! Scissors beats Paper");
        }
    }
}