import React from 'react';
import './App.css';

function App() {


const createDate = () => {
new Date().toLocaleString()
return
}

  return (
    <p>
      <div className="counter">{createDate}</div>
    </p>
  );
}

export default App;
