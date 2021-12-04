import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
const seconds = today.getSeconds()
console.log(seconds)
}

createDate()

  return (
    <p>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;
