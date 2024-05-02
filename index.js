let humanScore = 0;
let computerScore = 0;


function getComputerChoice (){
    randomInt = Math.floor(Math.random() * 3)
    if (randomInt == 0)
         return "scissors";
    else if (randomInt == 1)
         return "paper";
    else
        return "rock";
}

const roundMsg = document.querySelector("#round-msg")

function playRound(computerChoice, humanChoice){

    if  (computerChoice == humanChoice){
        roundMsg.textContent = "It's a tie! Try again please.";
    }    
    else if (computerChoice == "paper" && humanChoice == "scissors"){
        roundMsg.textConten = "You win! Scissors beat paper.";
        humanScore +=1;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"){
        roundMsg.textContent = "You loose! Rock beats scissors.";
        computerScore +=1;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock"){
        roundMsg.textContent = "You win! Rock beats scissors.";
            humanScore +=1;
    }
    else if (computerChoice == "paper" && humanChoice == "rock"){
        roundMsg.textContent = "You win! Rock beats paper.";
        humanScore +=1;
    }
    
    else if (computerChoice == "scissors" && humanChoice == "paper"){
        roundMsg.textContent = "You loose! Scissors beat paper.";
            computerScore +=1;
    }
    else {
        roundMsg.textContent = "You win! Rock beats scissors.";
        humanScore += 1;
    }   
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
        button.addEventListener("click", () => {
        humanSelection = button.id;

            const computerSelection = document.querySelector("#computer-choice");
            computerSelection.textContent = `Computer selection: ${getComputerChoice()}`;
            const playerScore = document.querySelector("#human-score");
            playerScore.textContent = `Your score: ${humanScore + 1}`;
            const computerPoints = document.querySelector("#computer-score");
            computerPoints.textContent = `Computer score: ${computerScore}`;
                        
            playRound(computerSelection, humanSelection);
            const msg = document.querySelector("#game-msg");

            if (humanScore === 5){
                msg.textContent = "Congratulations, you won!"
            }
            else if (computerScore === 5){
                msg.textContent = "You lost! Try again later"
    
            }
                    
            })
        });