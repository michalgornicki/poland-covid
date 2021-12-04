import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
const seconds = today.getSeconds()
console.log(seconds)
setInterval(createDate, 1000)
return createDate
}

createDate()

  return (
    <p>
      <div className="counter">{createDate}</div>
    </p>
  );
}

export default App;
