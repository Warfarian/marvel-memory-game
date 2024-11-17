import { useState } from 'react';
import { DisplayImages } from './components/DisplayImages';
import { ScoreCounter } from './components/ScoreCounter';
import './App.css';

function App() {
  const [score, setScore] = useState(0); 
  const [highScore, setHighScore] = useState(0); 


  function countScore(clicked, event) {
    const clickedImageId = event.target.id;
    if (clicked) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > highScore) {
          setHighScore(newScore); 
        }
        return newScore;
      });
    } else {
      setScore(0);
    }
  }

  return (
    <div className='container'>
      <div className='images'>
        <ScoreCounter score={score} highScore={highScore} />
        <DisplayImages countScore={countScore} />
      </div>
    </div>
  );
}

export default App;
