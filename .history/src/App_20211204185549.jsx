import React, { useEffect } from 'react';
import './App.css';

function App() {



  const startTime = () => {
    const date = new Date();
    let miliseconds = date.getTime();
    let seconds = Math.round(miliseconds/1000);
    let hours = seconds/3600;
    let thisYearHours = Mathhours - 447056;
    document.getElementsByClassName('counter')[0].innerHTML =  thisYearHours;
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
