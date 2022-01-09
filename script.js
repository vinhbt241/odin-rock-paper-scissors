const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const MAXPOINT = 5;

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    console.log(`Your choice is ${playerSelection}`);
    console.log(`Your Opponent's choice is ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return(["Tie Game!", 0]);
    }
    if (playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            return(["You Lose! Paper beats Rock", -1]);
        } else {
            return(["You Win! Rock beats Scissors", 1]);
        }
    }
    if (playerSelection === "PAPER") {
        if(computerSelection === "SCISSORS") {
            return(["You Lose! Scissors beats Paper", -1]);
        } else {
            return(["You Win! Paper beats Rock", 1]);
        }
    }
    if (playerSelection === "SCISSORS") {
        if(computerSelection === "ROCK") {
            return(["You Lose! Rock beats Scissors", -1]);
        } else {
            return(["You Win! Scissors beats Paper", 1]);
        }
    }
}

function game() {
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < MAXPOINT && computerScore < MAXPOINT) {
        let playerSelection = prompt("Type your choice here:");
        let computerSelection = computerPlay();
        console.log(`Round ${i}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result[0]);
        if (result[1] == 0) {
            console.log("Replay the round...");
            i--;
        } else if (result[1] == 1) {
            playerScore += 1;
        } else if (result[1] == -1) {
            computerScore += 1;
        } 
        i++;
    }
    console.log(`Here come the final score!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose :(");
    }
}