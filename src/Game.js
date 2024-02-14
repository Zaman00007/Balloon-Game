import React, { useState, useEffect } from 'react';
import './Game.css'; 

const Game = () => {
  const [pumps, setPumps] = useState(0);
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    if (popped) return; 
    setPumps(pumps + 1);
    if (pumps >= 50) {
      setPopped(true);
    }
  };

  const handleReset = () => {
    setPumps(0);
    setPopped(false);
  };

  useEffect(() => {
    let timer;
    if (!popped && pumps > 0) {
      timer = setTimeout(() => {
        setPumps(prevPumps => Math.max(0, prevPumps - 1));
      }, 380); 
    }
    return () => clearTimeout(timer);
  }, [popped, pumps]);

  const balloonSize = 50 + pumps * 5;

  return (
    <div className="container">
      <h1>Balloon Pumping Game</h1>
      <div className={`balloon ${popped ? 'popped' : ''}`} onClick={handleClick} style={{ width: `${balloonSize}px`, height: `${balloonSize}px` }}>
        <img src="/balloon.png" alt="Balloon" className={`icon ${popped ? 'popped' : ''}`} style={{ width: `${balloonSize}px`, height: `${balloonSize}px` }} />
      </div>
      {popped &&  <p className="message">Oops! The balloon popped. Try again!</p>}
      {!popped && <p>Number of pumps: {pumps}</p>}
      <button className='reset-button' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Game;
