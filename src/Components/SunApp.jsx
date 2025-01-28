import React, { useState, useEffect } from "react";
import "./Styles/SunApp.css";
import "aos/dist/aos.css";
import { AppResults } from "./AppResults";
import { AppNavbar } from "./AppNavbar";
import { DateSelector } from "./DateSelector/DateSelector";
import { NewAnalyzer } from "./Analyzers/NewAnalyzer.jsx";

const SunApp = () => {
  const [BOne, setBOne] = useState(0);
  const [BTwo, setBTwo] = useState(0);
  const [BThree, setBThree] = useState(0);
  const [BFour, setBFour] = useState(0);
  const [globalDate, setglobalDate] = useState(0);
  const [positions, setPositions] = useState([
    { posX: 0, posY: 0 },
    { posX: 0, posY: 0 },
    { posX: 0, posY: 0 },
    { posX: 0, posY: 0 }
  ]);

  // Function to update positions
  const updatePosition = (index, newPosition) => {
    setPositions(prev =>
      prev.map((pos, i) => (i === index ? newPosition : pos))
    );
  };
  

  // Function for add days
  const addDays = (str, num) => {
    let last = parseInt(str.slice(-1));
    let newLast = last + num;
    let newStr = str.substring(0, str.length - 1) + newLast;
    return newStr;
  };

  // Function for get the day
  const getDayNumber = num => {
    let toStr = num.toString().replace("-", "").replace("-", "").slice(-2);
    let toNum = parseInt(toStr);
    return toNum;
  };

  /* Setting the dates that every image that the analyzer will use */
  let dateForOne = 0;
  let dateForTwo = 0;
  let dateForThree = 0;
  let dateForFour = 0;

  let dateNumberForOne = 0;
  let dateNumberForTwo = 0;
  let dateNumberForThree = 0;
  let dateNumberForFour = 0;

  if (globalDate != 0) {
    dateForOne = globalDate;
    dateForTwo = addDays(globalDate, 1);
    dateForThree = addDays(globalDate, 2);
    dateForFour = addDays(globalDate, 3);

    dateNumberForOne = getDayNumber(dateForOne);
    dateNumberForTwo = getDayNumber(dateForTwo);
    dateNumberForThree = getDayNumber(dateForThree);
    dateNumberForFour = getDayNumber(dateForFour);
  }

  // Function for refreshing the values
  const [refreshCoords, setRefreshCoords] = useState(false);

  const refreshIt = () => {
    setBOne(0);
    setBTwo(0);
    setBThree(0);
    setBFour(0);
    setglobalDate(0);
    setRefreshCoords(true);
  };

  useEffect(
    () => {
      if (refreshCoords) {
        setBOne(0);
        setBTwo(0);
        setBThree(0);
        setBFour(0);
        setglobalDate(0);
        setRefreshCoords(false); // desactivamos la función
      }
    },
    [refreshCoords]
  );

  return (
    <main>
      <div className="mainApp">
        <DateSelector
          sendingDate={globalDate => setglobalDate(globalDate)}
          refreshIt={refreshIt}
        />

        <div className="principal-container">
          <NewAnalyzer
            mode={1}
            date={dateForOne}
            sendingB={BOne => setBOne(BOne)}
            sendPosition={position => updatePosition(0, position)}
            refreshCoords={refreshCoords}
          />
        </div>
        <div className="principal-container">
          <NewAnalyzer
            mode={2}
            date={dateForTwo}
            sendingB={BTwo => setBTwo(BTwo)}
            sendPosition={position => updatePosition(1, position)}
            refreshCoords={refreshCoords}
          />
        </div>
        <div className="principal-container">
          <NewAnalyzer
            mode={3}
            date={dateForThree}
            sendingB={BThree => setBThree(BThree)}
            sendPosition={position => updatePosition(2, position)}
            refreshCoords={refreshCoords}
          />
        </div>
        <div className="principal-container">
          <NewAnalyzer
            mode={4}
            date={dateForFour}
            sendingB={BFour => setBFour(BFour)}
            sendPosition={position => updatePosition(3, position)}
            refreshCoords={refreshCoords}
          />
        </div>
        <div className="principal-container">
          <AppResults
            bValues={[BOne, BTwo, BThree, BFour]}
            days={[
              dateNumberForOne,
              dateNumberForTwo,
              dateNumberForThree,
              dateNumberForFour
            ]}
            positions={positions}
          />
        </div>
      </div>
    </main>
  );
};

export default SunApp;
