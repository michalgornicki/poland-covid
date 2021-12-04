import React from 'react';
import './App.css';

function App() {


const createDate = () => {
var date = new Date().to;
return date
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
