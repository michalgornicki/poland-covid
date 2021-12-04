import React, { useEffect } from "react";
import "./App.css";

function App() {
  const startTime = () => {
    const date = new Date();
    let miliseconds = date.getTime();
    let seconds = Math.round(miliseconds / 1000);
    let hours = seconds / 3600;
    let thisYearHours = Math.round(hours - 447056);
    let thisYearSeconds = Math.round(seconds - 1609401600);

    let deaths = Math.round(thisYearSeconds * 0.00192110763);
    document.getElementsByClassName("counter")[0].innerHTML = deaths;
    let deathsPerMillion = Math.round(deaths / 37.95);
    document.getElementsByClassName("counter-2")[0].innerHTML =
      "Łącznie na Covid-19 zginęło w Polsce już " + (deaths + 28556) + " osób";
    document.getElementsByClassName("counter-2")[1].innerHTML =
      deathsPerMillion + "/mln mieszkańców";

    setTimeout(startTime, 1000);
  };

  useEffect(() => {
    startTime();
  });

  return (
    <p>
      <div className="text-container">
        <div className="header">
          Licznik oficjalnych zgonów na COVID-19 w Polsce w 2021 roku:
        </div>
        <div className="header-2">
          (W zeszłym roku w Polsce na koronawirusa zginęło 28556 osób.)
        </div>
        <div className="counter">{""}</div>
        <div className="counter-2">{""}</div>

        <div className="counter-2"></div>
      </div>
    </p>
  );
}

export default App;
