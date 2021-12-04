import React from 'react';
import './App.css';

function App() {



var date = new Date().toLocaleString();

countDate = setInterval(() => {
  
}, 100);


  return (
    <p>
      <div className="counter">{date}</div>
    </p>
  );
}

export default App;
