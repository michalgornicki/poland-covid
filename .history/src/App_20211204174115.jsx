import React from 'react';
import './App.css';

function App() {

  setInterval(() => {
    parrot += 1
     
    }, 100)

  return (
    <p>
      <div className="counter">{parrot}</div>
    </p>
  );
}

export default App;
