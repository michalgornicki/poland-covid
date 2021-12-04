import React from 'react';
import './App.css';

function App() {


const createDate = () => {
var date = new Date();
return date
}

const countDate = setInterval(() => {
  new Date()
}, 100);


  return (
    <p>
      <div className="counter">{countDate}</div>
    </p>
  );
}

export default App;
