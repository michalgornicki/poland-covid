import React from 'react';
import './App.css';

function App() {


  var a = 0
  setInterval(() => {
    newDate()
    }, 100)

    console.log(a)

  return (
    <p>
      <div className="counter">{a}</div>
    </p>
  );
}

export default App;
