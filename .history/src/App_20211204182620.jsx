import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
const hours = today.getHours()
console.log(hours)
setInterval(createDate, 1000)
document.getElementsByClassName("counter")[0].innerHTML = hours;
}

createDate()

  return (
    <p>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;
