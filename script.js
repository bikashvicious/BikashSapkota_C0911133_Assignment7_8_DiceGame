document.addEventListener('DOMContentLoaded', function() {
    const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

    let player1Score = 0;
    let player2Score = 0;

    const player1Element = document.getElementById('player1');
    const player2Element = document.getElementById('player2');
    const dice1Element = document.getElementById('dice1');
    const dice2Element = document.getElementById('dice2');
    const winnerElement = document.getElementById('winner');

    document.getElementById('rollButton').addEventListener('click', function() {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        dice1Element.src = diceImages[roll1 - 1];
        dice2Element.src = diceImages[roll2 - 1];

        const difference = Math.abs(roll1 - roll2);
        if (roll1 > roll2) {
            player1Score += difference;
        } else if (roll2 > roll1) {
            player2Score += difference;
        }

        player1Element.textContent = `Player 1 Score: ${player1Score}`;
        player2Element.textContent = `Player 2 Score: ${player2Score}`;

        if (player1Score >= 20) {
            winnerElement.textContent = 'Player 1 Wins!';
            document.getElementById('rollButton').disabled = true;
        } else if (player2Score >= 20) {
            winnerElement.textContent = 'Player 2 Wins!';
            document.getElementById('rollButton').disabled = true;
        }
    });
});
