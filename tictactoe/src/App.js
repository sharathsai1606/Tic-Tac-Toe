import React, { useState } from "react";
import "./App.css";

function App() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(initialSquares);
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main className="App-main">
        <div className="game-board">
          {squares.map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={resetGame}>Reset</button>
        </div>
      </main>
    </div>
  );
}

export default App;
