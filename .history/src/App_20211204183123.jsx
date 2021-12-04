import React from 'react';
import './App.css';

function App() {


const createDate = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

createDate()

  return (
    <p>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;
