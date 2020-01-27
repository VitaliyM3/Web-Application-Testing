import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

function App() {

  const[balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);  

  const strike = () => {
    if (strikes === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const ball = () => {
    if (balls === 4) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const foul = () => {
    if (strikes === 2) {
      setStrikes(2);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard strike={strike} ball={ball} foul={foul} hit={hit} />
    </div>
  );
}

export default App;
