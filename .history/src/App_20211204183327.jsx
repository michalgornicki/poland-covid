import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
const seconds = today.getSeconds()
console.log(seconds)
document.getElementsByClassName("counter")[0].innerHTML = seconds;
setInterval(createDate, 1000)
}

const startTime = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  document.getElementsByClassName('counter')[0].innerHTML =  h + ":" + m + ":" + s;
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
