let humanScore = 0;
let computerScore = 0;

function getComputerChoice (randomInt){
    randomInt = Math.floor(Math.random() * 3)
    // console.log(randomInt);
    if (randomInt == 0)
         return "scissors";
    else if (randomInt == 1)
         return "paper";
    else
        return "rock";
}

// console.log(getComputerChoice());

function getHumanChoice(){
    return window.prompt("What is your choice?", "").toLowerCase();
}

// console.log(getHumanChoice()); 

function playRound(computerChoice, humanChoice){
    if  (computerChoice == humanChoice){
        console.log("It's a tie! Try again please.");
    }    
    else if (computerChoice == "paper" && humanChoice == "scissors"){
        console.log("You win! Scissors beat paper.");
        humanScore +=1;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You loose! Scissors beat rock.");
        computerScore +=1;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock"){
            console.log("You win! Rock beats scissors.");
            humanScore +=1;
    }
    else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log("You win! Rock beats paper.");
        humanScore +=1;
}
    else {
        console.log("You loose! Rock beats paper.");
        computerScore += 1;
    }   
    }
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log("Computer selection:", computerSelection);
console.log("Your selection:", humanSelection);
console.log(playRound(computerSelection, humanSelection));
console.log("Your score:", humanScore);
console.log("Computer score:", computerScore);

