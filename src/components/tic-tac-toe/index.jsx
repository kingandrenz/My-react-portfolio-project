import { useState, useEffect } from 'react';
import './style.css';

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  // Reusable Square component
  function Square({ value, handleClick }) {
    return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    );
  }

  // Winning pattern logic
  function getWinner(squares) {
    const winning_patterns = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Main diagonal
      [2, 4, 6], // Anti-diagonal
    ];

    for (let i = 0; i < winning_patterns.length; i++) {
      const [a, b, c] = winning_patterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null; // Move this outside the loop!
  }

  // Handle click on a square
  function handleClick(index) {
    const copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[index]) return;

    copySquares[index] = isXTurn ? 'X' : 'O';
    setSquares(copySquares);
    setIsXTurn(!isXTurn);
  }

  // Restart game
  function handleRestart() {
    setSquares(Array(9).fill(''));
    setIsXTurn(true);
    setStatus('');
  }

  // Game status checker
  useEffect(() => {
    const winner = getWinner(squares);
    if (winner) {
      setStatus(`🎉 Winner is ${winner}`);
    } else if (squares.every((square) => square !== '')) {
      setStatus('😬 It\'s a draw! Restart to play again.');
    } else {
      setStatus(`Next player: ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="t-container">
      <div className="row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
