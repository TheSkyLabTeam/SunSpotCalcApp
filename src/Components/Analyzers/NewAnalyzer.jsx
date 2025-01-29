import React, { useEffect, useRef, useState } from "react";
import errorBackground from "./ErrorImagesForAnalyzers/NoEncontradaRojo.jpg";
import "aos/dist/aos.css";
import "./ImageAnalyzer.css";

export const NewAnalyzer = ({ sendPosition, sendL0, ...props }) => {
  const [posX, setposX] = useState(0);
  const [posY, setposY] = useState(0);
  const [imageSize, setImageSize] = useState(512);
  const [R, setR] = useState(221);
  const [coorParameter, setCoorParameter] = useState(256);

  // Switch for the main color based on analyzer mode
  let analyzerMainColor = "";
  switch (props.mode) {
    case 1:
      analyzerMainColor = "#FF595E";
      break;
    case 2:
      analyzerMainColor = "#FFCA3A";
      break;
    case 3:
      analyzerMainColor = "#8AC926";
      break;
    case 4:
      analyzerMainColor = "#1982C4";
      break;
    default:
      analyzerMainColor = "#FF595E";
  }

  const refDate = new Date();
  const refreshCoords = props.refreshCoords;

  // Math helper functions
  Math.radians = (degrees) => (degrees * Math.PI) / 180;
  Math.degrees = (radians) => (radians * 180) / Math.PI;

  // Update image size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSize, newR, newCoorParameter;

      if (screenWidth <= 640) {
        newSize = 300;
        newR = 129.5;
        newCoorParameter = 150;
      } else if (screenWidth <= 768) {
        newSize = Math.min(512, screenWidth - 40);
        newR = 221;
        newCoorParameter = 256;
      } else {
        newSize = 512;
        newR = 221;
        newCoorParameter = 256;
      }

      setImageSize(newSize);
      setR(newR);
      setCoorParameter(newCoorParameter);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ref = useRef(null);

  // Send position to parent component
  useEffect(() => {
    if (posX !== 0 || posY !== 0) {
      sendPosition?.({ posX, posY });
    }
  }, [posX, posY]);

  // Handle click coordinates
  useEffect(() => {
    const getcordd = (e) => {
      e.preventDefault();
      const bnds = e.target.getBoundingClientRect();
      const posX = e.clientX - bnds.left - coorParameter;
      const posY = bnds.top - e.clientY + coorParameter;
      
      setposX(posX);
      setposY(posY);
    };

    const element = ref.current;
    element.addEventListener("click", getcordd);
    return () => element.removeEventListener("click", getcordd);
  }, [coorParameter]);

  // Reset coordinates when refresh is triggered
  useEffect(() => {
    if (refreshCoords === true) {
      setposX(0);
      setposY(0);
    }
  }, [refreshCoords]);

  // Date calculations
  const imageCalculationDate = props.date;
  const displaiedImageDate = imageCalculationDate.toString().replace(/-/g, "");
  const newDate = new Date(imageCalculationDate);

  // Date components
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  // Function for calculate eina
  function getQuadrantByEina(eina) {
    const eina0 = eina % 360;
    const eina1 = [];
    if (eina0 > 0 && eina0 <= 90) {
      eina1.push(1);
    }
    if (eina0 > 90 && eina0 <= 180) {
      eina1.push(2);
    }
    if (eina0 > 180 && eina0 <= 270) {
      eina1.push(3);
    }
    if (eina0 > 270 && eina0 <= 360) {
      eina1.push(4);
    }
    return eina1;
  }

  // Julian Date calculation
  const JD =
    367 * year -
    Math.trunc((7 * (year + Math.trunc((month + 9) / 12.0))) / 4.0) +
    Math.trunc((275 * month) / 9.0) +
    day +
    1721013.5;

  // Astronomical calculations
  const T = (JD - 2451545.0) / 36525;
  const LL = (280.46646 + 36000.76983 * T + 0.0003032 * T ** 2) % 360;
  const M = (357.52911 + 35999.05029 * T - 0.000153 * T ** 2) % 360;
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T ** 2) * Math.sin(Math.radians(M)) +
    (0.019993 - 0.000101 * T) * Math.sin(2 * Math.radians(M)) +
    0.000289 * Math.sin(3 * Math.radians(M));
  const O_ = LL + C;
  const Womiuga = 125.04 - 1934.136 * T;
  const Lamda = O_ - 0.00569 - 0.00478 * Math.sin(Math.radians(Womiuga));
  const Lamda_ = O_ - 1.397 * T - 0.00031 * T ** 2;

  // Astronomical Algorithms 22.2
  const epxlong0 =
    23 +
    26 / 60 +
    21.448 / 3600 -
    (46.815 / 3600) * T -
    (0.00059 / 3600) * T ** 2 +
    (0.001813 / 3600) * T ** 3;
  const L_ = 280.4665 + 36000.27698 * T;
  const L__ = 218.3165 + 481267.28813 * T;
  const Q = (125.04452 - 1934.136261 * T + 0.0020708 * T ** 2 + T ** 3 / 450000) % 360;

  // Astronomical Algorithms p144
  const depxlong =
    (9.2 / 3600) * Math.cos((Q * Math.PI) / 180) +
    (0.57 / 3600) * Math.cos(2 * Math.radians(L_)) +
    (0.1 / 3600) * Math.cos(2 * Math.radians(L__)) -
    (0.09 / 3600) * Math.cos(2 * Math.radians(Q));
  const epxlong = epxlong0 + depxlong;
  const sita = (((JD - 2398220) * 360) / 25.38) % 360;
  const I = 7.25;
  const K = 73.6667 + (1.3958333 * (JD - 2396758)) / 36525;
  const x = Math.degrees(Math.atan(-Math.cos(Math.radians(Lamda_)) * Math.tan(Math.radians(epxlong))));
  const y = Math.degrees(Math.atan(-Math.cos(Math.radians(Lamda - K)) * Math.tan(Math.radians(I))));
  const P = x + y;

  // B0: heliographic latitude calculation
  const B0 = Math.degrees(Math.asin(Math.sin(Math.radians(Lamda - K)) * Math.sin(Math.radians(I))));
  let eina = Math.degrees(Math.atan(Math.tan(Math.radians(Lamda - K)) * Math.cos(Math.radians(I))));
  const LK = Lamda - K - 180;
  const eina_1 = getQuadrantByEina(eina)[0];
  const LK_1 = getQuadrantByEina(LK)[0];
  if (eina_1 === LK_1) {
    eina = eina - 180;
  }
  const L0 = (eina - sita - 100) % 360;

  // Sunspot calculations
  const Pm = 180 - Math.degrees(Math.atan2(posX, posY));
  const Rm = Math.sqrt(posX ** 2 + posY ** 2);
  const d = 0.54;
  const theta = Math.radians(Pm) - Math.radians(P) - Math.PI;
  const alpha = Math.atan((Rm / R) * Math.tan(Math.radians(d / 2)));
  const rho1 = Math.asin(Math.sin(alpha) / Math.sin(Math.radians(d / 2))) - alpha;
  const B1 = Math.degrees(
    Math.asin(
      Math.cos(rho1) * Math.sin(Math.radians(B0)) +
        Math.sin(rho1) * Math.cos(Math.radians(B0)) * Math.sin(theta)
    )
  );
  const l = Math.asin((Math.cos(theta) * Math.sin(rho1)) / Math.cos(Math.radians(B1)));
  const L1 = L0 + Math.degrees(l);
  const rho2 = Math.radians(Math.degrees(Math.asin(Rm / R)) - Math.radians(d) * (Rm / R));
  const B2 = Math.degrees(
    Math.asin(
      Math.cos(rho2) * Math.sin(Math.radians(B0)) +
        Math.sin(rho2) * Math.cos(Math.radians(B0)) * Math.cos(Math.radians(P - Pm))
    )
  );
  const L2 =
    L0 +
    Math.degrees(Math.asin(Math.sin(Math.radians(P - Pm)) * Math.sin(rho2) * Math.cos(Math.radians(B2))));

    useEffect(() => {
      sendL0?.(((l * 90)/Math.PI) * 2);
    }, [l]);
  return (
    <div id="analyzerPrincipalContainer">
      <h1 id="numIndicator">
        <span style={{ opacity: 0.1 }}>0</span>
        <span style={{ color: analyzerMainColor }}>{props.mode}</span>
      </h1>
      <div
        id="displayImage"
        onClick={() => props.sendingB?.(B1)}
        ref={ref}
        style={{
          backgroundImage:
            newDate > refDate
              ? `url(${errorBackground})`
              : `url("https://soho.nascom.nasa.gov/data/synoptic/sunspots/sunspots_1024_${displaiedImageDate}.jpg")`,
          border: `2px solid ${analyzerMainColor}`,
          width: `${imageSize}px`,
          height: `${imageSize}px`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {posX !== 0 && (
          <div
            id="sendAlertContainer"
            style={{
              backgroundColor: analyzerMainColor,
              position: "absolute",
              top: "1rem",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              color: "white",
            }}
          >
            Coordenadas enviadas
          </div>
        )}
      </div>
      <div id="analyzerInfoContainer">
        <div id="analyzerTitleContainer">
          <h4 id="analyzerTitle">Selecciona una mancha para obtener sus coordenadas</h4>
        </div>
        <div id="analyzerDescriptionContainer">
          <p id="analyzerParagraph" style={{ color: analyzerMainColor }}>
            {!posX
              ? "Elige una fecha inicial y haz click en una de las manchas solares visibles en la imagenes para obtener sus coordenadas."
              : "Listo! Continua con la siguiente imagen."}
          </p>
          <div id="analyzerCoordsContainer">
            <h5 className="analyzerCoord">Coord X: {posX.toFixed(2)} px.</h5>
            <h5 className="analyzerCoord">Coord Y: {posY.toFixed(2)} px.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnalyzer;