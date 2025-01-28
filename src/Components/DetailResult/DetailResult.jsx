import React from "react";
import "./DetailResult.css";

export const DetailResult = (props) => {
  let deltaB = props.delta;
  let T = props.T;
  let refNum = props.num;
  let latitudes = props.l0Values;

  /* Posible render variants */

  let refImageTitles = [
    "Para imagen #1 y #2",
    "Para imagen #2 y #3",
    "Para imagen #3 y #4"
  ];

  let refImageTitle = "";
  let renderedDeltaB = 0;
  let renderedT = 0;

  /* Conditionals for set the variants */

  if (refNum == 1) {
    refImageTitle = refImageTitles[0];
    renderedDeltaB = deltaB[0];
    renderedT = T[0];
  }
  if (refNum == 2) {
    refImageTitle = refImageTitles[1];
    renderedDeltaB = deltaB[1];
    renderedT = T[1];
  }
  if (refNum == 3) {
    refImageTitle = refImageTitles[2];
    renderedDeltaB = deltaB[2];
    renderedT = T[2];
  }

  return (
    <div id="DetailResult">
      <div className="detailParagraph">
        <h4 className="textDetail" id="detailDeltaB">
          ΔB: {renderedDeltaB.toFixed(2)} grados.
        </h4>
        <h4 className="textDetail" id="detailT">
          Rotación del sol: {renderedT.toFixed(2)} días.
        </h4>
        {renderedDeltaB > 0 ? (
          <h4 className="textDetail" id="angularSpeed">
            Velocidad angular: {(renderedDeltaB / renderedT).toFixed(2)} grados/día.
          </h4>
        ) : null}
        <h4 className="textDetail">
          Latitud de la mancha en la imagen #{refNum}: {latitudes[0]?.toFixed(2)} grados.
        </h4>
        <h4 className="textDetail">
          Latitud de la mancha en la imagen #{refNum + 1}: {latitudes[1]?.toFixed(2)} grados.
        </h4>
      </div>
      <div className="refImageContainer">
        <p className="resultTitle">
          {refImageTitle}
        </p>
      </div>
    </div>
  );
};