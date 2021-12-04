import React from 'react';
import './App.css';

function App() {


  var a = 0
  setInterval(() => {
    a ++
    }, 100)

  return (
    <p>
      <div className="counter">{a}</div>
    </p>
  );
}

export default App;
