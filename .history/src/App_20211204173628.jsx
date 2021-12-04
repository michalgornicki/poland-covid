import React from 'react';
import './App.css';

function App() {
  return (
    <p>
      <div className="counter">{setInterval(() => {
       1+
      }, 100)}</div>
    </p>
  );
}

export default App;
