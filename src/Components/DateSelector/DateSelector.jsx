import React from 'react'
import { useState } from 'react';
import './DateSelector.css'
import { SendCheck, ArrowClockwise } from 'react-bootstrap-icons'
import 'aos/dist/aos.css';

export const DateSelector = (props) => {

  const [date, setdate] = useState(0);

  const handleDate = (e) => {
    setdate((e.target.value))
  }

  return (
    <div id='dateSelectorContainer' data-aos="fade-down" data-aos-once="true">

      <h1 id="dateTitle">Escoge una fecha: </h1>
      <input type="date" name="globalDate" id="dateSelector" onChange={handleDate}/>
      <button className="buttonFromDate" id='dateSender' onClick={() => props.sendingDate(date)}><SendCheck size={22}/></button>
      <button className="buttonFromDate" id="refreshButton" onClick={() => props.refreshIt()}><ArrowClockwise size={22}/></button>
      
    </div>
  )
}
