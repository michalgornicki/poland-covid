import React from 'react';
import './App.css';

function App() {


var createDate = () => {
var date = new Date();
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
