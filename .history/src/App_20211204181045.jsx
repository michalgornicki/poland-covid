import React from 'react';
import './App.css';

function App() {


const createDate = () => {
const today = new Date()
today.getSeconds()
}

const countDate = () = >setInterval(() => {
  createDate()
}, 100);

countDate()


  return (
    <p>
      <div className="counter">{countDate}</div>
    </p>
  );
}

export default App;
