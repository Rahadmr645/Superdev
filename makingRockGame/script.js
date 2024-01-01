function randomMoves() {
    const randomMove = Math.random();
    let computerMove = '';
    let Result = '';
    if (randomMove > 0 && randomMove <= 1 / 2) {
        computerMove = 'Rock';
    } else if (randomMove > 1 / 2 && randomMove <= 2 / 3) {
        computerMove = 'Paper';
    } else if (randomMove > 2 / 3 && randomMove < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;

}

function playGame(playerMove) {
    const computerMove = randomMoves();

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            Result = 'Tie';
        } else if (computerMove === 'Paper') {
            Result = 'You win';
        } else if (computerMove === 'Scissors') {
            Result = 'You Lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            Result = 'You win';
        } else if (computerMove === 'Paper') {
            Result = 'You lose';
        } else if (computerMove === 'Scissors') {
            Result = 'Tie.';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            Result = 'You lose';
        } else if (computerMove === 'Paper') {
            Result = 'Tie';
        } else if (computerMove === 'Scissors') {
            Result = 'You win';
        }
    }

    alert(`You Picked ${playerMove} . computer Picked ${computerMove} . And ${Result}`);

}