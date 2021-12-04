import React, { useEffect } from 'react';
import './App.css';

function App() {



  const startTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementsByClassName('counter')[0].innerHTML =  h;
    setTimeout(startTime, 1000);
  }

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = `Kliknięto ${count} razy`;
  });

  return (
    <p>
      <div className="counter">{""}</div>
    </p>
  );
}

export default App;
