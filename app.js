function getComputerChoice(){
    let choiceNumber = Math.ceil(Math.random() * 3);
    let choice;

    switch(choiceNumber){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    
}

let computerChoice = getComputerChoice();