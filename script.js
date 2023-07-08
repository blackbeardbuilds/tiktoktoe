// Tic-Tac-Toe Game Code
// Create the game board
const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

// Define the players
let player1 = 'X';
let player2 = 'O';

// Track the current player
let currentPlayer = player1;

// Function to display the game board
const displayBoard = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
};

// Function to check if the board is full
const isBoardFull = () => {
  return board.every((cell) => cell !== ' ');
};

// Function to check if a player has won
const checkWin = () => {
  // Define winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check for winning combinations
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== ' ') {
      return true;
    }
  }

  return false;
};

// Function to handle player moves
const makeMove = (position) => {
  if (board[position] === ' ' && !checkWin()) {
    board[position] = currentPlayer;
    displayBoard();

    if (checkWin()) {
      setTimeout(() => {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      }, 100);
      return;
    }

    if (isBoardFull()) {
      setTimeout(() => {
        alert("It's a tie!");
        resetGame();
      }, 100);
      return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
};

// Function to reset the game
const resetGame = () => {
  board.fill(' ');
  const playerSelection = document.getElementsByName('player');
  player1 = playerSelection[0].value;
  player2 = playerSelection[1].value;
  currentPlayer = player1;
  displayBoard();
};

// Display initial board
displayBoard();
