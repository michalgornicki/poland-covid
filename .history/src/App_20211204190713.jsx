import React, { useEffect } from 'react';
import './App.css';

function App() {



  const startTime = () => {
    const date = new Date();
    let miliseconds = date.getTime();
    let seconds = Math.round(miliseconds/1000);
    let hours = seconds/3600;
    let thisYearHours = Math.round(hours - 447056);
    let thisYearSeconds = Math.round(seconds - 1609401600)

    let deaths = Math.round(thisYearSeconds*0.00192110763);
    document.getElementsByClassName('counter')[0].innerHTML =  deaths;
    setTimeout(startTime, 1000);
  }

  useEffect(() => {
    startTime()
  });

  return (
    <p>
      <div className="header">{""}</div>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;