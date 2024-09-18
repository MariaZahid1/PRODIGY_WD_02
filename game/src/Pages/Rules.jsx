import React from "react";

const Rules = () => {
  return (
    <div className="rules-container">
      <h1 className="rules-title">Rules of Tic-Tac-Toe</h1>
      <ul className="rules-list">
        <li>The game is played on a grid that's 3 squares by 3 squares.</li>
        <li>
          You are X, your friend (or the computer in this case) is O. Players
          take turns putting their marks in empty squares.
        </li>
        <li>The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.</li>
        <li>When all 9 squares are full, the game is over.</li>
      </ul>
      <style jsx>{`
        .rules-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f7f7f7;
          padding: 20px;
          text-align: center;
        }

        .rules-title {
          font-size: 2.5rem;
          color: #032858;
          margin-bottom: 1rem;
        }

        .rules-list {
          list-style: none;
          padding: 0;
          font-size: 1.2rem;
          color: #333;
          line-height: 1.6;
        }

        .rules-list li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Rules;
