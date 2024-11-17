import React from 'react';

function ScoreCounter({ score, highScore }) {
  return (
    <div className="scores">
      <div>Score: <span>{score}</span></div>
      <div>High Score: <span>{highScore}</span></div>
    </div>
  );
}


export { ScoreCounter };
