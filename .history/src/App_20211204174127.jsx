import React from 'react';
import './App.css';

function App() {

  function incrementSeconds() {
    seconds += 1;
    el.innerText = "You have been here for " + seconds + " seconds.";
}

  return (
    <p>
      <div className="counter">{parrot}</div>
    </p>
  );
}

export default App;
