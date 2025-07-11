let restartBtn = document.getElementById("restartBtn");
let submitBtn = document.getElementById("submitBtn");
let playBtn = document.getElementById("playBtn");
let humanChoiceText = document.getElementById("options");
let computerChoiceText = document.getElementById("computer-choice");
let resultText = document.getElementById("round-winner");
let roundNumberText = document.getElementById("round-number");
let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let humanScoreText = document.getElementById("human-score");
let computerScoreText = document.getElementById("computer-score");
let drawScoreText = document.getElementById("draw-score");
let gameWinnerText = document.getElementById("game-winner");


submitBtn.addEventListener("click", () => {
    playRound(getHumanChoice(), getComputerChoice());
    if (roundNumber < 5) {
        setTimeout(toNextRound, 1500);
    }
})

playBtn.addEventListener("click", () => playGame());


function playGame() {
    let allElements = document.querySelectorAll("* :not(#playBtn)");
    allElements.forEach((element) => {
        element.style.visibility = "visible";
    })
    playBtn.remove();
    restartBtn.style.visibility = "hidden";
}

function playRound(humanChoice, computerChoice) {
    submitBtn.disabled = true;
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

    if (roundNumber >= 5) {
        computerScoreText.textContent = computerScore.toString();
        humanScoreText.textContent = humanScore.toString();
        drawScoreText.textContent = drawScore.toString();
        submitBtn.style.visibility = "hidden";
        restartBtn.style.visibility = "visible";
        displayWinner(humanScore, computerScore);
        restartBtn.addEventListener("click", () => {
            restartGame();
        })
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
    submitBtn.disabled = false;
    playGame();
}


function toNextRound() {
    submitBtn.disabled = false;
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