function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return ("rock");
    }
        else if (choice == 1){
            return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getUserChoice() {
    let userChoice = prompt(`Enter your choice (rock,paper or scissors):`)
    return userChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return `It's a tie`;
    }
    else if ((humanChoice === `rock` && computerChoice === `scissors`)|| 
             (humanChoice === `paper` && computerChoice === `rock`) || (humanChoice===`scissors` && computerChoice === `paper`))
     {
         humanScore++;
        return `Human won`
    }
    else {
        computerScore++;
        return `Computer won`
    }
}   

function playGame() {
    for (let i =0;i<5;i++){
        let humanChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let roundResult  = playRound(humanChoice,computerChoice)    
        console.log(`Round ${i+1}: ${roundResult}`)    
    }
    return `The player score is ${humanScore} and the computer score is ${computerScore}`
}

console.log(playGame());