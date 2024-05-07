function convertChoice(choice) {
    switch (choice){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 ) + 1;
    return convertChoice(choice);
}

function getHumanChoice() {
    let choice = Number(prompt("Choose one(digit only the correspondent number):\n1-Rock\n2-Paper\n3-Scissors"));
    return convertChoice(choice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw! You both chose " + humanChoice);
    } else if ((humanChoice === "Paper" && computerChoice === "Rock") 
            || (humanChoice === "Rock" && computerChoice === "Scissors") 
            || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log("You won, " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else {
        console.log("You lose, " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
}

playRound(getHumanChoice(),getComputerChoice());