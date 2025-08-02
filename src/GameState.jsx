import {useState} from "react";

const initialBoard = () => Array(9).fill(null);

const GameState = () => {
    
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  // possible winning combinations
  const winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (currentBoard) => {
    //  loop through winState to check for a winner
    for (let i = 0; i < winState.length; i++) {
      const [a, b, c] = winState[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] &&
          currentBoard[a] === currentBoard[c])
      {
        // if a winner is found, return the winner's mark
        return currentBoard[a];
      }
    }
    // if no winner, do nothing
    return;
  };

  const handleClick = (index) => {
    // check winner
    const winner = checkWinner(board);
    if (winner || board[index])
    {
        // if there's a winner or square is already filled, do nothing
        return;
    } 
    // update board
    const newBoard = [...board];
    // set current player's mark
    // toggle between "X" and "O"
    newBoard[index] = isXNext ? "X" : "O";
    // update state
    setBoard(newBoard);
    // toggle next player
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    // check winner
    const winner = checkWinner(board);
    if (winner)
    {
        return `Player ${winner} wins!`;
    } 

    // if no winner and board is full
    let isFull = true;
    for (let i = 0; i < board.length; i++)
    {
        if (board[i] === null) 
        {
            isFull = false;
            break;
        }
    }
    if (isFull) 
    {
        return "Draw!";
    }
    // if no winner and game is still ongoing
    // return current player's turn
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
    // reset game   
  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return {board, handleClick, checkWinner, getStatusMessage, resetGame};
};

export default GameState;