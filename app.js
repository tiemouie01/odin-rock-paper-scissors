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

function incrementScore(scoreElement){
    let score = Number(scoreElement.textContent);
    score++;
    scoreElement.textContent = score;
}

function playRound(){
    const userSelection = this.classList.value; //gets the player choice
    const computerSelection = getComputerChoice();

    const userScore = document.querySelector('.user .score'); // references the span element showing the user's score.
    const computerScore = document.querySelector('.computer .score'); // references the span element showing the computer's score.

    const result = document.querySelector('.declaration');

    let winnerDeclaration;

    if (!checkCompletion(userScore,computerScore,result)){
        if (userSelection === 'rock' && computerSelection === 'scissors'){
            winnerDeclaration = 'You win this round! Rock beats Scissors';
            incrementScore(userScore);
        } else if (userSelection === 'scissors' && computerSelection === 'rock') {
            winnerDeclaration = 'You lose this round! Rock beats Scissors';
            incrementScore(computerScore);
        } else if (userSelection === 'paper' && computerSelection === 'rock') {
            winnerDeclaration = 'You win this round! Paper beats Rock';
            incrementScore(userScore);
        } else if (userSelection === 'rock' && computerSelection === 'paper') {
            winnerDeclaration = 'You lose this round! Paper beats Rock';
            incrementScore(computerScore);
        } else if (userSelection === 'scissors' && computerSelection === 'paper') {
            winnerDeclaration = 'You win this round! Scissors beats Paper';
            incrementScore(userScore);
        } else if (userSelection === 'paper' && computerSelection === 'scissors') {
            winnerDeclaration = 'You lose this round! Scissors beats Paper';
            incrementScore(computerScore);
        } else {
            winnerDeclaration = `It's a tie! You both picked ${userSelection}`;
        }
        result.textContent = winnerDeclaration;
    }
}

function checkCompletion(userScoreElement, computerScoreElement, result){
    
    /* This function checks the if either of the players have reached the 5 points.
       If any of the players pass this mark, the function returns a value of true,
       signalling that the game has been completed. When the function returns a value
       of true the game can no longer be continued and a winner is announced.*/

    userScore = Number(userScoreElement.textContent);
    computerScore = Number(computerScoreElement.textContent);

    if (userScore >= 5){
        result.textContent = 'The game is over. You beat the computer!';
        return true;
    } else if (computerScore >= 5){
        result.textContent = 'The game is over. You lost to the computer.';
        return true;
    }
    return false;
}

function game() {
    const userSelections = document.querySelectorAll('button'); // references all selection buttons on webpage.

    userSelections.forEach(selection => {
        selection.addEventListener('click', playRound);
    })
}

game();