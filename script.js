// Initialize player scores and element references
let player1Score = 0;
let player2Score = 0;

const player1Element = document.getElementById('player1');
const player2Element = document.getElementById('player2');
const winnerElement = document.getElementById('winner');

// Event listener for roll button
document.getElementById('rollButton').addEventListener('click', function() {
    // Generate random dice rolls
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    // Log dice rolls to console
    console.log("Rolls:", roll1, roll2);

    // Get references to dice elements
    const dice1Element = document.getElementById('dice1');
    const dice2Element = document.getElementById('dice2');

    // Calculate score difference
    const difference = Math.abs(roll1 - roll2);
    if (roll1 > roll2) {
        player1Score += difference;
    } else if (roll2 > roll1) {
        player2Score += difference;
    }

    // Log updated scores to console
    console.log("Scores:", player1Score, player2Score);

    // Update player score displays
    player1Element.textContent = `Player 1 Score: ${player1Score}`;
    player2Element.textContent = `Player 2 Score: ${player2Score}`;

    // Update dice images
    dice1Element.src = `dice${roll1}.png`;
    dice2Element.src = `dice${roll2}.png`;

    // Apply roll animation to dice elements
    dice1Element.classList.add('roll-animation');
    dice2Element.classList.add('roll-animation');

    // Remove roll animation after 1 second
    setTimeout(function() {
        dice1Element.classList.remove('roll-animation');
        dice2Element.classList.remove('roll-animation');

        // Check for winner and disable roll button if necessary
        if (player1Score >= 20) {
            winnerElement.textContent = 'Player 1 Wins!';
            document.getElementById('rollButton').disabled = true;
        } else if (player2Score >= 20) {
            winnerElement.textContent = 'Player 2 Wins!';
            document.getElementById('rollButton').disabled = true;
        }
    }, 1000);
});
