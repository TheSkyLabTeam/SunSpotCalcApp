import React from 'react'
import './Analyzers/ImageAnalyzer'
import { DetailResult } from './DetailResult/DetailResult'
import './Styles/AppResults.css'


export const AppResults = (props) => {

  let T = [0, 0, 0]

  // Defining a function that emulates numpy diff

  function diff(array) {
    let delta = [Math.abs(array[1]-array[0]), Math.abs(array[2]-array[1]),Math.abs(array[3]-array[2])];
    return delta;
  }

  // Defining a function that calculates that emulates mean

  function mean(arr) {
    // check if the array is empty
    if (arr.length === 0) {
      return 0;
    }
  
    // sum up all the elements in the array
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    // divide the sum by the number of elements to get the average
    return sum / arr.length;
  }

  // Defining a function for divide the elements of the arrays
  function divideArrays(array1, array2) {
    if(array1.length !== array2.length) {
      throw new Error("Both arrays must have the same length")
    }
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      if(array2[i] === 0) throw new Error("Cannot divide by 0");
      if(array1[i] === undefined || array2[i] === undefined) throw new Error("array element cannot be undefined")
      result.push(array1[i] / array2[i]);
    }
    return result;
  }
  
  
  
  let BCalc = props.bValues;
  let DAYS = props.days;

  let delta = diff(BCalc);
  let deltaDays = diff(DAYS);

  let multipliedDAYS = (deltaDays.map(element => element * 360));
  
  if (multipliedDAYS.every(element => element !== 0) && delta.every(element => element !== 0)){
    T = divideArrays(multipliedDAYS, delta)
  }
  
  

  return (
    <>
        <h1 id='resultTitle'>Resultados</h1>
        <div className="resultsContainer">
          <div className="resultCol" id='colResult1'>
            <div className="dayResult" id='ContainerDayTitleResult'>
              <h3 className="titleResult">Rotación promedio del sol</h3>
            </div>
            <div className="dayResult" id='ContainerDayDetailResult'>
              <h1 id="dayIntResult">{parseInt(mean(T))}</h1>
              <h4 id="dayFloatResult">{((- Math.trunc(mean(T)) + mean(T)).toFixed(2)).replace(0, '')}</h4>
              <h4 id="textDays">Días</h4>
            </div>
          </div>
          <div className="resultCol" id='colResult2'>
            <DetailResult num="1" delta={delta} T={T} />
            <DetailResult num="2" delta={delta} T={T} />
            <DetailResult num="3" delta={delta} T={T} />
          </div>

        </div>
    </>
  )
}
9