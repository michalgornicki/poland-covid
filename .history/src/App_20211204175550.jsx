import React from 'react';
import './App.css';

function App() {


const createDate = () => {
var date = new Date().toLocaleString();
document.getElementById("demo").innerHTML = t;
}

  return (
    <p>
      <div className="counter">{createDate}</div>
    </p>
  );
}

export default App;
