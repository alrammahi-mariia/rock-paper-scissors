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

    if  (computerChoice == humanChoice){
        console.log("It's a tie! Try again please.");
    }    
    else if (computerChoice == "paper" && humanChoice == "scissors"){
        console.log("You win! Scissors beat paper.");
        humanScore +=1;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You loose! Rock beats scissors.");
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
    
    else if (computerChoice == "scissors" && humanChoice == "paper"){
            console.log("You loose! Scissors beat paper.");
            computerScore +=1;
    }
    else {
        console.log("You loose! Rock beats paper.");
        computerScore += 1;
    }   
}


// div.appendChild(msg);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
        button.addEventListener("click", () => {

            const computerSelection = getComputerChoice();
            const humanSelection = button.id;
                        
            console.log("Computer selection:", computerSelection);
            console.log("Your selection:", humanSelection);
            playRound(computerSelection, humanSelection);
            console.log("Your score:", humanScore);
            console.log("Computer score:", computerScore); 
            let msg = document.querySelector("#msg");

            if (humanScore === 5){
                msg.textContent = "Congratulations, you won!"
            }
            else if (computerScore === 5){
                msg.textContent = "You lost! Try again later"
    
            }
                    
            })
        });