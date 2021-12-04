import React, { useEffect } from "react";
import "./App.css";

function App() {
  const startTime = () => {
    const date = new Date();
    let miliseconds = date.getTime();
    let seconds = Math.round(miliseconds / 1000);
    let thisYearSeconds = Math.round(seconds - 1609401600);
    let deaths = Math.round(thisYearSeconds * 0.00192110763);
    let allDeaths = deaths + 28556;
    let smolensk = Math.round(allDeaths / 96);
    let tradeCenter = Math.round(allDeaths / 2977);
    document.getElementsByClassName("counter")[0].innerHTML = deaths;
    let deathsPerMillion = Math.round(deaths / 37.95);
    document.getElementsByClassName("counter-2")[0].innerHTML =
      deathsPerMillion + "/mln mieszkańców";
    document.getElementsByClassName("counter-3")[0].innerHTML =
      "Łącznie na Covid-19 zginęło w Polsce już " + (deaths + 28556) + " osób.";
    document.getElementsByClassName("counter-4")[0].innerHTML =
      "To tyle ile " + smolensk + " katastrofy smoleńskie.";
      document.getElementsByClassName("counter-4")[1].innerHTML =
       tradeCenter + " zamachów na World Trade Center.";

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
        <div className="counter-3"></div>
        <div className="counter-4"></div>
        <div className="counter-4"></div>
        <div className="counter-4"></div>
      </div>
    </p>
  );
}

export default App;
