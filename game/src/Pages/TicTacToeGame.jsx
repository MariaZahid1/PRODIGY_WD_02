import React, { useState } from "react";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !board.includes(null) && !winner;
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "No Winner!"
    : `Next Player: ${isXNext ? "X" : "O"}`;

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game-container">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        <div className="row">
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
        </div>
      </div>
      <button className="restart" onClick={() => setBoard(Array(9).fill(null))}>
        Restart Game
      </button>
      <style jsx>{`
        .game-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f7f7f7;
        }

        .game-title {
          font-size: 3rem;
          color: #032858;
          margin-bottom: 1.5rem;
        }

        .status {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #054a91;
        }

        .board {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .row {
          display: flex;
          justify-content: center;
        }

        .square {
          width: 100px;
          height: 100px;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          background-color: #fff;
          border: 2px solid #032858;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .square:hover {
          background-color: #f0f4f7;
        }

        .restart {
          padding: 10px 20px;
          font-size: 1.2rem;
          background-color: #032858;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .restart:hover {
          background-color: #054a91;
        }
      `}</style>
    </div>
  );
};

export default TicTacToeGame;
