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

function playRound(humanChoice, computerChoice) {
    let humanMove;

    switch (humanChoice.toLowerCase()) {
        case 'rock':
            humanMove = 1;
            break;
        case 'paper':
            humanMove = 2;
            break;
        case 'scissors':
            humanMove = 3;
            break;
    }

    let message;

    if (humanMove === computerChoice) {
        message = `You and the computer chose ${humanChoice.toLowerCase()}, it\'s a draw!`;
    }
    else if (humanMove === 1) {
        if (computerChoice == 2) {
            message = `You lose! Paper beats rock.`;
        }
        else if (computerChoice == 3) {
            message = `You win! Rock beats scissors.`;
        }
    }
    else if (humanMove === 2) {
        if (computerChoice == 1) {
            message = `You win! Paper beats rock.`;
        }
        else if (computerChoice == 3) {
            message = `You lose! Scissors beats paper.`;
        }
    }
    else {
        if (computerChoice == 1) {
            message = `You lose! Rock beats scissors.`;
        }
        else if (computerChoice == 2) {
            message = `You win! Scissors beats paper.`;
        }
    }
    console.log(message);
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log('Computer choice: ' + computerSelection);

playRound(humanSelection, computerSelection);
