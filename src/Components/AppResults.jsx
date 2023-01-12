import React from 'react'
import './Analyzers/ImageAnalyzer'
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
  console.log(multipliedDAYS);
  
  if (multipliedDAYS.every(element => element !== 0) && delta.every(element => element !== 0)){
    T = divideArrays(multipliedDAYS, delta)
    console.log(T);
  }
  
  

  return (
    <>
        <h1 id='resultTitle'>Resultados</h1>
        <div id="resultParagraph">
          {/*Results for image one and two*/}
          <h2 className='subtitleResult'>Para la imagen <span className='highlighterRed'>#1</span> y <span className='highlighterYellow'>#2</span></h2>
          <h3 className="resultDelta">El valor de delta B es igual a: {delta[0]}</h3>
          <h3 className="resultDelta">Y la rotacion del sol es de aproximadamente: {T[0] !== 0 ? T[0].toFixed(3) : T[0]}</h3>

          {/*Results for image two and three*/}
          <h2 className='subtitleResult'>Para la imagen <span className='highlighterYellow'>#2</span> y <span className='highlighterGreen'>#3</span></h2>
          <h3 className="resultDelta">El valor de delta B es igual a: {delta[1]}</h3>
          <h3 className="resultDelta">Y la rotacion del sol es de aproximadamente: {T[1] !== 0 ? T[1].toFixed(3) : T[1]}</h3>

          {/*Results for image three and four*/}
          <h2 className='subtitleResult'>Para la imagen <span className='highlighterGreen'>#3</span> y <span className='highlighterBlue'>#4</span></h2>
          <h3 className="resultDelta">El valor de delta B es igual a: {delta[2]}</h3>
          <h3 className="resultDelta">Y la rotacion del sol es de aproximadamente: {T[2] !== 0 ? T[2].toFixed(3) : T[2]}</h3>

          <br/>
          <h3 className="resultDelta">La rotación promedio del Sol es de aproximadamente {mean(T)} días.</h3>
        </div>
    </>
  )
}
9