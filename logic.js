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

console.log(getComputerChoice());