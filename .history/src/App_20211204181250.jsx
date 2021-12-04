import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
const seconds = today.getSeconds()
}

const countDate = () => setInterval(() => {
  createDate()
}, 100);


  return (
    <p>
      <div className="counter">{seconds}</div>
    </p>
  );
}

export default App;
