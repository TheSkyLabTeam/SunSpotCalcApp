import React from 'react'
import './DetailResult.css'

export const DetailResult = (props) => {

  let deltaB = props.delta;
  let T = props.T;
  let refNum = props.num;

  /* Posible render variants */

  let refImageTitles = ['Para imagen #1 y #2', "Para imagen #2 y 3#", "Para imagen #3 y #4"];

  let refImageTitle = '';
  let renderedDeltaB = 0;
  let renderedT = 0

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
    <div id="DetailResult"
        style={
            refNum == 1 ?
            {border: `4px solid #FF595E`,
             borderBottom: `12px solid #FF595E`} :
            refNum == 2 ?
            {border: `4px solid #FFCA3A`,
             borderBottom: `12px solid #FFCA3A`} :
            refNum == 3 ?
            {border: `4px solid #1982C4`,
             borderBottom: `12px solid #1982C4`} :
             {border: `0px`}
            
        }>
        <h1 className="refImageTitle"
            style={
                refNum == 1 ?
                {color: `#FF595E`} :
                refNum == 2 ?
                {color: `#FFCA3A`} :
                refNum == 3 ?
                {color: `#1982C4`}:
                {color: `white`}
                
        }>
            {refImageTitle}
        </h1>
        <div className="detailParagraph">
            <h4 className='textDetail' id="detailDeltaB">ΔB es: {renderedDeltaB.toFixed(2)} grados.</h4>
            <h4 className='textDetail' id="detailT">Rotación del sol: {renderedT.toFixed(2)} días.</h4>
        </div>
    </div>
  )
}
