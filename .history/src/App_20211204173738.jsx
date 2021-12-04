import React from 'react';
import './App.css';

function App() {
  return (
    <p>
      <div className="counter">{setInterval(() => {
      " abc"
      }, 100)}</div>
    </p>
  );
}

export default App;
