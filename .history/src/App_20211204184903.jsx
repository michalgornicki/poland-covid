import React, { useEffect } from 'react';
import './App.css';

function App() {



  const startTime = () => {
    const time = new Date();
    let h = time.getHours();
    document.getElementsByClassName('counter')[0].innerHTML =  h;
    setTimeout(startTime, 1000);
  }

  useEffect(() => {
    startTime()
  });

  return (
    <p>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;
