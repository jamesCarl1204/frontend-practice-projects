const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let myScore = 0;

let computer = 0

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = ""; 

    if(playerChoice === computerChoice) {
        result = "ITS A TIE"
    }
    else {
        switch(playerChoice) {
            case "rock" :
                result = (computerChoice === "scissors") ?  "YOU WIN" : "YOU LOSE";
                break;
            case "paper" :
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break
            case "scissors" :
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break

        }

        if(result === "YOU WIN") {
           myScore++
        } 
        else if(result === "YOU LOSE") {
            computer ++
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice + "Score: " + myScore}`;
    computerDisplay.textContent = `computer: ${computerChoice + "Score: " + computer}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText")

    switch(result) {
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE" :
            resultDisplay.classList.add("redText");
            
            break;
        case "ITS A TIE":
            resultDisplay.classList.add("yellowText");
            break;
    }
}
