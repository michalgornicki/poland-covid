import React from 'react';
import './App.css';

function App() {


const createDate = () => {
var date = new Date();
return date
}

const countDate = setInterval(() => {
  createDate()
}, 100);


  return (
    <p>
      <div className="counter">{createDate}</div>
    </p>
  );
}

export default App;
