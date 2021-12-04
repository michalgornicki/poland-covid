import React from 'react';
import './App.css';

function App() {


  var a 
  setInterval(() => {
    a = a + 1
    }, 100)

  return (
    <p>
      <div className="counter">{a}</div>
    </p>
  );
}

export default App;
