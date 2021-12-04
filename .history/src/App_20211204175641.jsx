import React from 'react';
import './App.css';

function App() {



var date = new Date().toLocaleString();
document.getElementsByClassName("counter")[0].innerHTML = date;


  return (
    <p>
      <div className="counter">{createDate}</div>
    </p>
  );
}

export default App;
