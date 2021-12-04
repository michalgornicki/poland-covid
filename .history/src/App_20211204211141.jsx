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
    let excessDeaths = allDeaths*1.85;
    let smolensk = Math.round(allDeaths / 96);
    let tradeCenter = Math.round(allDeaths / 2977);
    let uprising = (allDeaths / 175000).toFixed(2) * 100;


    document.getElementsByClassName("counter")[0].innerHTML = deaths;
    let deathsPerMillion = Math.round(deaths / 37.95);
    document.getElementsByClassName("counter-2")[0].innerHTML =
      deathsPerMillion + "/mln mieszkańców";
    document.getElementsByClassName("counter-3")[0].innerHTML =
      "Łącznie na Covid-19 zginęło w Polsce już " + (deaths + 28556) + " osób.";
      document.getElementsByClassName("counter-3")[0].innerHTML =
      "Według danych raportu Health at Glance liczba nadmiarowych zgonów w Polsce względem lat ubiegłych wskazuje na to, że liczba ofiar Covid-19 jest wyższa o 85%. Pełna liczba zgonów związanych z epidemią (obciążenie chrony zdrowia" + (deaths + 28556) + " osób.";
    document.getElementsByClassName("counter-4")[0].innerHTML =
      "To tyle ile " + smolensk + " katastrofy smoleńskie.";
      document.getElementsByClassName("counter-4")[1].innerHTML =
      "To " + tradeCenter + " razy więcej ofiar niż w wyniku zamachu na World Trade Center.";
      document.getElementsByClassName("counter-4")[2].innerHTML =
      "To " + uprising + "% ofiar Powstania Warszawskiego.";

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
