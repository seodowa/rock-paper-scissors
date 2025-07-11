let restartBtn = document.getElementById("restartBtn");
let submitBtn = document.getElementById("submitBtn");
let humanChoiceText = document.getElementById("options");
let computerChoiceText = document.getElementById("computer-choice");
let resultText = document.getElementById("round-winner");
let roundNumberText = document.getElementById("round-number");
let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;
let humanScoreText = document.getElementById("human-score");
let computerScoreText = document.getElementById("computer-score");


submitBtn.addEventListener("click", () => {
    
    if (restartBtn.style.visibility === "hidden") {
        restartBtn.style.visibility = "visible";
    } else {
        restartBtn.style.visibility = "hidden";
    }
    playRound(getHumanChoice(), getComputerChoice());
})


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    computerChoiceText.textContent = toTitleCase(computerChoice);

    switch (humanChoice) {
        case "paper":
            paperAgainst(computerChoice);
            break;
        case "rock":
            rockAgainst(computerChoice);
            break;
        case "scissors":
            scissorsAgainst(computerChoice);
            break;
    }

    roundNumber++;
    roundNumberText.textContent = `Round ${roundNumber}`;
    computerScoreText.textContent = computerScore.toString();
    humanScoreText.textContent = humanScore.toString();
}


function paperAgainst(computerChoice) {
    switch (computerChoice) {
        case "paper":
            resultText.textContent = "Draw!";
            break;
        case "rock":
            resultText.textContent = `You win! Paper beats ${toTitleCase(computerChoice)}.`;
            humanScore++;
            break;
        case "scissors":
            resultText.textContent = `You lose! ${toTitleCase(computerChoice)} beats Paper.`;
            computerScore++;
            break;
    }
}


function rockAgainst(computerChoice) {
    switch (computerChoice) {
        case "paper":
            resultText.textContent = `You lose! ${toTitleCase(computerChoice)} beats Rock.`;
            computerScore++;
            break;
        case "rock":
            resultText.textContent = "Draw!";
            break;
        case "scissors":
            resultText.textContent = `You win! Rock beats ${toTitleCase(computerChoice)}.`;
            humanScore++;
            break;
    }
}


function scissorsAgainst(computerChoice) {
    switch (computerChoice) {
        case "paper":
            resultText.textContent = `You win! Scissors beats ${toTitleCase(computerChoice)}.`;
            humanScore++;
            break;
        case "rock":
            resultText.textContent = `You lose! ${toTitleCase(computerChoice)} beats Scissors.`;
            computerScore++;
            break;
        case "scissors":
            resultText.textContent = "Draw!";
            break;
    }
}


function getHumanChoice() {
    return humanChoiceText.value;
}


function getComputerChoice() {
    let randomNum = Math.ceil(Math.random() * 3)
    switch (randomNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


// credits to geeksforgeeks
function toTitleCase(s) {
    return s.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}