function getComputerChoice(){
    let choiceNumber = Math.ceil(Math.random() * 3);
    let choice;

    switch(choiceNumber){
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    //rock beats scissors
    //paper beats rock
    //scissors beats paper
    playerSelection = playerSelection.toLowerCase();
    let winnerDeclaration;

    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        winnerDeclaration = 'You win! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        winnerDeclaration = 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winnerDeclaration = 'You win! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        winnerDeclaration = 'You lose! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winnerDeclaration = 'You win! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        winnerDeclaration = 'You lose! Scissors beats Paper';
    } else {
        winnerDeclaration = `It's a tie! You both picked ${playerSelection}`;
    }
    return winnerDeclaration;
}

function game() {
    console.log('ROCK PAPER SCISSORS');
    let computerSelection;
    let playerSelection;

    for (let i = 1; i <= 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt('Enter your choice between rock, paper and scissors: ');

        winnerDeclaration = playRound(playerSelection, computerSelection);
        console.log(winnerDeclaration);

        (i != 5) ? console.log('Next round loading...') : console.log('Game complete.')
    }
}

game();