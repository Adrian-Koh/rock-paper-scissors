const moves = ['', 'rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let move = Math.floor(Math.random() * 3) + 1;

    return move;
}

function getHumanChoice() {
    let move = prompt("Please choose between \'rock\', \'paper\' and \'scissors\'.");

    return move;
}

function getMessage(humanMove, computerMove) {
    if (humanMove === computerMove) {
        return `You and the computer chose ${moves[humanMove]}, it\'s a draw!`;
    }

    let message;
    
    if ((humanMove === 1 && computerMove === 2) ||
        (humanMove === 2 && computerMove === 3) ||
        (humanMove === 3 && computerMove === 1)) {
        message = `You lose! `;
        computerScore++;
    }
    else {
        message = `You win! `;
        humanScore++;
    }

    if ((humanMove === 1 && computerMove === 2) ||
        (humanMove === 2 && computerMove === 1)) {
        message += `Paper beats rock.`;
    }
    else if ((humanMove === 2 && computerMove === 3) ||
             (humanMove === 3 && computerMove === 2)) {
        message += `Scissors beats paper.`;
    }
    else {
        message += `Rock beats scissors.`;
    }

    return message;
}

function playRound(humanChoice, computerChoice) {
    let humanMove = moves.indexOf(humanChoice.toLowerCase());

    const message = document.querySelector('#message');
    message.textContent = getMessage(humanMove, computerChoice);

    const humanScoreSpan = document.querySelector('#humanScore');
    const computerScoreSpan = document.querySelector('#computerScore');

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

const btnContainer = document.querySelector('#btnContainer');
btnContainer.addEventListener('click', (event) => {
    let target = event.target;
    playRound(target.id, getComputerChoice());
});
