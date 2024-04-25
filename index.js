function getComputerChoice (randomInt){
    randomInt = Math.floor(Math.random() * 3)
    if (randomInt == 0)
         return "scissors";
    else if (randomInt == 1)
         return "paper";
    else
        return "rock";
}

function getHumanChoice(){
    return window.prompt("What is your choice?", "").toLowerCase();
}

function playGame (number){
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i < number; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
    
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
        
        console.log("Computer selection:", computerSelection);
        console.log("Your selection:", humanSelection);
        playRound(computerSelection, humanSelection);
        console.log("Your score:", humanScore);
        console.log("Computer score:", computerScore); 

        }

}

playGame(5);
