let restartBtn = document.getElementById("restartBtn");
let submitBtn = document.getElementById("submitBtn");
let humanChoice = document.getElementById("options");
let humanScore = 0;
let computerScore = 0;

submitBtn.addEventListener("click", () => {
    
    if (restartBtn.style.visibility === "hidden") {
        restartBtn.style.visibility = "visible";
    } else {
        restartBtn.style.visibility = "hidden";
    }
    console.log(getHumanChoice());
})


function playRound() {
    
}


function getHumanChoice() {
    return humanChoice.value;
}


function getComputerChoice() {
    let randomNum = Math.ceil(Math.random() * 3)
    switch (randomNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}