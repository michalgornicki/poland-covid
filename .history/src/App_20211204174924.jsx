import React from 'react';
import './App.css';

function App() {


  var date = new Date()

  setInterval(() => {
    var date = new Date()
    }, 100)

    console.log(a)

  return (
    <p>
      <div className="counter">{date}</div>
    </p>
  );
}

export default App;
