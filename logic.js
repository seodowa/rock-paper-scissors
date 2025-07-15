let playBtn = document.getElementById("playBtn");
let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

let restartBtn = null;
let playerChoiceRock = null;
let playerChoicePaper = null;
let playerChoiceScissors = null;
let computerChoiceText = null;
let resultText = null;
let roundNumberText = null;

let humanScoreText = null;
let computerScoreText = null;
let drawScoreText = null;
let gameWinnerText = null;

playBtn.addEventListener("click", () => playGame());


function playGame() {
    let template = document.querySelector("template");
    let container = document.querySelector(".universal-container");
    let clone = template.content.cloneNode(true);
    playBtn.remove();
    container.appendChild(clone);

    instantiateVariables();
    instantiateEventListeners();
}

function instantiateVariables() {
    restartBtn = document.getElementById("restartBtn");
    restartBtn.style.visibility = "hidden";
    playerChoiceRock = document.getElementById("rock");
    playerChoicePaper = document.getElementById("paper");
    playerChoiceScissors = document.getElementById("scissors");
    computerChoiceText = document.getElementById("computer-choice");
    resultText = document.getElementById("round-winner");
    roundNumberText = document.getElementById("round-number");
    humanScoreText = document.getElementById("human-score");
    computerScoreText = document.getElementById("computer-score");
    drawScoreText = document.getElementById("draw-score");
    gameWinnerText = document.getElementById("game-winner");
}


function instantiateEventListeners() {
    playerChoiceRock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    })
    playerChoicePaper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    })
    playerChoiceScissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    })
}   

function playRound(humanChoice, computerChoice) {
    disableButtons(playerChoicePaper, playerChoiceRock, playerChoiceScissors);
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

    if (isThereAWinner(humanScore, computerScore)) {
        computerScoreText.textContent = computerScore.toString();
        humanScoreText.textContent = humanScore.toString();
        drawScoreText.textContent = drawScore.toString();
        restartBtn.style.visibility = "visible";
        displayWinner(humanScore, computerScore);
        restartBtn.addEventListener("click", () => {
            restartGame();
        })
    } else {
        setTimeout(toNextRound, 1500);
    }
}


function restartGame() {
    humanScore = computerScore = drawScore = 0;
    roundNumber = 1;
    roundNumberText.textContent = `Round ${roundNumber}`;
    computerScoreText.textContent = computerScore.toString();
    humanScoreText.textContent = humanScore.toString();
    drawScoreText.textContent = drawScore.toString();
    computerChoiceText.textContent = "";
    resultText.textContent = "";
    gameWinnerText.textContent = "";
    enableButtons(playerChoicePaper, playerChoiceRock, playerChoiceScissors);
    restartBtn.style.visibility = "hidden";
}


function toNextRound() {
    enableButtons(playerChoicePaper, playerChoiceRock, playerChoiceScissors);
    resultText.textContent = "";
    computerChoiceText.textContent = "";
    roundNumber++;
    roundNumberText.textContent = `Round ${roundNumber}`;
    computerScoreText.textContent = computerScore.toString();
    humanScoreText.textContent = humanScore.toString();
    drawScoreText.textContent = drawScore.toString();
}


function displayWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        gameWinnerText.textContent = `Player won the game!`;
    } else if (humanScore < computerScore) {
        gameWinnerText.textContent = `Computer won the game!`;
    } else {
        gameWinnerText.textContent = `It's a draw!`;
    }
}


function paperAgainst(computerChoice) {
    switch (computerChoice) {
        case "paper":
            resultText.textContent = "Draw!";
            drawScore++;
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
            drawScore++;
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
            drawScore++;
            break;
    }
}


function isThereAWinner(humanScore, computerScore) {
    if (humanScore >= 5 || computerScore >= 5) {
        return true;
    }
    return false;
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


function enableButtons(...buttons) {
    buttons.forEach((button) => {
        button.disabled = false;
    })
}


function disableButtons(...buttons) {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}