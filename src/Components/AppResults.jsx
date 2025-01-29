import React from "react";
import "./Styles/AppResults.css";
import { DetailResult } from "./DetailResult/DetailResult";

export const AppResults = props => {
  let T = [0, 0, 0];

  // Utility functions
  function diff(array) {
    return array.slice(1).map((val, i) => Math.abs(val - array[i]));
  }

  function mean(arr) {
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  }

  function divideArrays(array1, array2) {
    if (array1.length !== array2.length)
      throw new Error("Arrays must match in length");
    return array1.map((val, i) => {
      if (array2[i] === 0) throw new Error("Cannot divide by zero");
      return val / array2[i];
    });
  }

  let BCalc = props.bValues;
  let DAYS = props.days;
  let positions = props.positions;
  let L0Values = props.l0values;

  let delta = diff(BCalc);
  let deltaDays = diff(DAYS);

  let multipliedDAYS = deltaDays.map(element => element * 360);

  if (multipliedDAYS.every(e => e !== 0) && delta.every(e => e !== 0)) {
    T = divideArrays(multipliedDAYS, delta);
  }


  const getColor = num => {
    switch (num) {
      case 1:
        return "var(--color-red)";
      case 2:
        return "var(--color-yellow)";
      case 3:
        return "var(--color-green)";
      default:
        return "var(--color-blue)";
    }
  };

  return (
    <div>
      <h1 id="resultTitleSection">Resultados</h1>
      <div className="resultsContainer">
        <div id="firstResultCol">
          {/* Day Result Container */}
          <div className="resultContainer">
            <div className="resultContent">
              <h1 id="dayIntResult">
                {parseInt(mean(T))}
              </h1>
              <h4 id="dayFloatResult">
                {(-Math.trunc(mean(T)) + mean(T)).toFixed(2).replace(0, "")}
              </h4>
              <h4 id="textDays">Días</h4>
            </div>
            <div className="resultTitle">Rotación promedio del sol</div>
          </div>

          {/* Coordenadas Container */}
          <div className="resultContainer" id="coordContainer">
            <div className="resultContent" id="coordContent">
              {positions && positions.map((pos, index) =>
                <div className="coordItem" key={index + 1}>
                  <h4 style={{ color: getColor(index + 1) }}>
                    Coordenada {index + 1}
                  </h4>
                  <p>
                    Coord X: {pos.posX.toFixed(2)}
                  </p>
                  <p>
                    Coord Y: {pos.posY.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
            <div className="resultTitle">Coordenadas</div>
          </div>
        </div>

        {/* Detailed Results */}
        <div id="secondResultCol">
          {[1, 2, 3].map(num =>
            <DetailResult
              key={num}
              num={num}
              delta={delta}
              T={T}
              l0Values={L0Values?.slice(num - 1, num + 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
};