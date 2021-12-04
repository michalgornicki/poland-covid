import React from 'react';
import './App.css';

function App() {



  setInterval(() => {
    var date = new Date()
    }, 100)

    console.log(date)

  return (
    <p>
      <div className="counter">{date}</div>
    </p>
  );
}

export default App;
