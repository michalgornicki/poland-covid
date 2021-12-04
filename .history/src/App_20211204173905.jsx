import React from 'react';
import './App.css';

function App() {

  const interval = setInterval(() => {
    var a = a + 1
    }, 100)

  return (
    <p>
      <div className="counter"></div>
    </p>
  );
}

export default App;
