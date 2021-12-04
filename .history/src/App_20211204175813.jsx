import React from 'react';
import './App.css';

function App() {


createDate = () => {
var date = new Date().toLocaleString();
}

const countDate = setInterval(() => {
  date
}, 100);


  return (
    <p>
      <div className="counter">{countDate}</div>
    </p>
  );
}

export default App;
