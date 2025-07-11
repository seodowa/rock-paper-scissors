let restartBtn = document.getElementById("restartBtn");
let submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener("click", () => {
    
    if (restartBtn.style.visibility === "hidden") {
        restartBtn.style.visibility = "visible";
    } else {
        restartBtn.style.visibility = "hidden";
    }
})


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