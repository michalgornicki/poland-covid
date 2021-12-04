import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()

console.log(today)
}

createDate()

  return (
    <p>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;
