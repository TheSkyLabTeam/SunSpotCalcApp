import React, { useState, useRef } from 'react';
import { SendCheck, ArrowCounterclockwise, CalendarEvent } from 'react-bootstrap-icons';
import './DateSelector.css';

export const DateSelector = ({ sendingDate, refreshIt }) => {
  const [date, setDate] = useState('');
  const hiddenInputRef = useRef(null);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleMobileClick = () => {
    // Usar el input real oculto
    hiddenInputRef.current.click();
  };

  return (
    <div id="dateSelectorContainer" data-aos="fade-down" data-aos-once="true">
      <h1 id="dateTitle">Escoge una fecha: </h1>
      
      {/* Desktop version */}
      <div className="desktop-date-input">
        <input 
          type="date" 
          id="dateSelector"
          value={date}
          onChange={handleDate}
        />
      </div>

      {/* Mobile version */}
      <div className="mobile-date-container">
        <button className="mobile-date-button" onClick={handleMobileClick}>
          <CalendarEvent size={20} />
        </button>
        <input
          ref={hiddenInputRef}
          type="date"
          className="hidden-date-input"
          value={date}
          onChange={handleDate}
        />
      </div>

      {/* Action buttons */}
      <button 
        className="buttonFromDate" 
        id="dateSender" 
        onClick={() => sendingDate(date)}
      >
        <SendCheck size={22}/>
      </button>
      <button 
        className="buttonFromDate" 
        id="refreshButton" 
        onClick={() => refreshIt()}
      >
        <ArrowCounterclockwise size={22}/>
      </button>
    </div>
  );
};

export default DateSelector;