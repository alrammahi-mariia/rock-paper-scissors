let humanScore = 0;
let computerScore = 0;

function getComputerChoice (randomInt){
    randomInt = Math.floor(Math.random() * 3)
    console.log(randomInt);
    if (randomInt == 0)
         return "scissors";
    else if (randomInt == 1)
         return "paper";
    else
        return "rock";
}

console.log(getComputerChoice());

function getHumanChoice(){
    return window.prompt("What is your choice?", "").toLowerCase();
}

console.log(getHumanChoice()); // write different cases and increment a winner's score

// function playRound(computerChoice, humanChoice){
//     case (computerChoice == "scissors" && humanChoice == "paper")
//         return console.log("You loose! Paper scissors beat paper.");
//     else 
  

// }
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

function playGame () //loop for 5 times

