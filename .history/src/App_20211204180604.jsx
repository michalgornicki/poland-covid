import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
return today
}

const countDate = setInterval(() => {
  createDate()
}, 100);


  return (
    <p>
      <div className="counter">{countDate}</div>
    </p>
  );
}

export default App;
