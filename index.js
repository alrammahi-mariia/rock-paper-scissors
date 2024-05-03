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



function playRound(computerChoice, humanChoice){

    const roundMsg = document.querySelector("#round-msg")

    if (computerChoice == "paper" && humanChoice == "scissors"){
        roundMsg.textContent = "You win! Scissors beat paper.";
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
        roundMsg.textContent = "You loose! Paper beats rock.";
        computerScore +=1;
    }
    
    else if (computerChoice == "scissors" && humanChoice == "paper"){
        roundMsg.textContent = "You loose! Scissors beat paper.";
            computerScore +=1;
    }
    else if (computerChoice == "rock" && humanChoice == "paper"){
        roundMsg.textContent = "You win! Paper beats rock.";
            humanScore +=1;
    }
    else {
        {
            roundMsg.textContent = "It's a tie! Try again please.";
        }   
    }   
}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
        button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();

            playRound(computerSelection, humanSelection);

            const computerOption = document.querySelector("#computer-choice");
            computerOption.textContent = `Computer selection: ${computerSelection}`;
            const playerScore = document.querySelector("#human-score");
            playerScore.textContent = `Your score: ${humanScore}`;
            const computerPoints = document.querySelector("#computer-score");
            computerPoints.textContent = `Computer score: ${computerScore}`;
                        
            const msg = document.querySelector("#game-msg");

            if (humanScore === 5){
                msg.textContent = "Congratulations, you won!"
            }
            else if (computerScore === 5){
                msg.textContent = "You lost! Try again later"
    
            }
                    
            })
        });