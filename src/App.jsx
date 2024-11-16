import { useState, useEffect } from 'react'
import {DisplayImages} from './components/DisplayImages.jsx'
import { ScoreCounter } from './components/ScoreCounter.jsx';
import './App.css'

function App() {
  return(
    <div className='container'>
      <div className='images'>
          <ScoreCounter />
          <DisplayImages />
      </div>
    </div>
  );
}

export default App
