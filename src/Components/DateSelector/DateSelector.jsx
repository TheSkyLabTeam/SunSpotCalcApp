import React from 'react'
import { useState } from 'react';
import './DateSelector.css'

export const DateSelector = (props) => {

  const [date, setdate] = useState(0);

  const handleDate = (e) => {
    setdate((e.target.value))
  }

  // onClick={() => props.sendingB(B1)}

  return (
    <div id='dateSelectorContainer'>

      <h1 id="dateTitle">Escoge una fecha: </h1>
      <input type="date" name="globalDate" id="dateSelector" onChange={handleDate}/>
      <button id="dateSender" onClick={() => props.sendingDate(date)}></button>
      
    </div>
  )
}
