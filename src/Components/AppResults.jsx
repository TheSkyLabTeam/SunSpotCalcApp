import React from "react";
import "./Analyzers/ImageAnalyzer";
import { DetailResult } from "./DetailResult/DetailResult";
import "./Styles/AppResults.css";

export const AppResults = (props) => {
  let T = [0, 0, 0];

  // Utility functions
  function diff(array) {
    return array.slice(1).map((val, i) => Math.abs(val - array[i]));
  }

  function mean(arr) {
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  }

  function divideArrays(array1, array2) {
    if (array1.length !== array2.length) throw new Error("Arrays must match in length");
    return array1.map((val, i) => {
      if (array2[i] === 0) throw new Error("Cannot divide by zero");
      return val / array2[i];
    });
  }

  let BCalc = props.bValues;
  let DAYS = props.days;

  let delta = diff(BCalc);
  let deltaDays = diff(DAYS);

  let multipliedDAYS = deltaDays.map((element) => element * 360);

  if (multipliedDAYS.every((e) => e !== 0) && delta.every((e) => e !== 0)) {
    T = divideArrays(multipliedDAYS, delta);
  }

  return (
    <div>
      <h1 id="resultTitle">Resultados</h1>
      <div className="resultsContainer">
        <div id="firstResultCol">
          {/* Day Result Container */}
          <div className="resultContainer">
            <div className="resultTitle">Rotación promedio del sol</div>
            <div className="resultContent">
              <h1 id="dayIntResult">{parseInt(mean(T))}</h1>
              <h4 id="dayFloatResult">
                {(-Math.trunc(mean(T)) + mean(T)).toFixed(2).replace(0, "")}
              </h4>
              <h4 id="textDays">Días</h4>
            </div>
          </div>

          {/* Coordenadas Container */}
          <div id="coordsResumeContainer">
            <div id="coordsResumeTitleContainer">Coordenadas</div>
            <div id="coordsResumeDetailsContainer"></div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="resultCol" id="colResult2">
          {[1, 2, 3].map((num) => (
            <div className="resultContainer" key={num}>
              <div className="resultTitle">Detalle Resultado {num}</div>
              <div className="resultContent">
                <DetailResult num={num} delta={delta} T={T} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
