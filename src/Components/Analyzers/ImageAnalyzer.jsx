import React, { useEffect, useRef, useState } from 'react'
import '../Analyzers/ImageAnalyzer'
import errorBackground from './ErrorImagesForAnalyzers/NoEncontradaRojo.jpg'

export const ImageAnalyzer = (props) => {

    const [date, setDate] = useState();
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);

    //Reference date

    let refDate = new Date();

    // defining variables for the x and y axis coordinates of the click in each display

    let xOne = 0;
    let yOne = 0;

    let R = 221;


    xOne = posX;
    yOne = posY;
    
    // Function to get the coordinates of the x and y axis

    const ref = useRef(null);
    // const value = {this:props.value}

    useEffect(() => {

        const getcordd = (e) => {
          
            let bnds = e.target.getBoundingClientRect();
            let posX = e.clientX - bnds.left - 256;
            let posY = bnds.top - e.clientY + 256;
            

            setposX(posX);
            setposY(posY);
          
          };

          const element = ref.current;

          element.addEventListener('click', getcordd);
      return () => {
        element.removeEventListener('click', getcordd);
      };
    }, []);

    /* Using date for the calculation and the sun's image that will be displayed*/
    let imageCalculationDate = props.date;
    let displaiedImageDate = imageCalculationDate.toString().replace('-', '').replace('-', '');
    let newDate = new Date(imageCalculationDate);

    // Extranting the year, month, and day from newDate/calculationDate
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDate();

    /* Necesary funtions for calculus */
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    }

    Math.degrees = function(radians) {
        return radians * 180 / Math.PI;
    }

    /* Making the function for get the Julian date*/
    let JD =  367*year-Math.trunc((7*(year+Math.trunc((month+9)/12.0)))/4.0)+Math.trunc((275*month)/9.0)+day+1721013.5

    /* Function for calculate eina */
    function getQuadrantByEina(eina) {
        let eina0 = eina % 360
        let eina1 = [];
        if (eina0 > 0 && eina0 <= 90){
            eina1.push(1)
        }
        if (eina0 > 90 && eina0 <= 180){
            eina1.push(2)
        }
        if (eina0 > 180 && eina0 <= 270){
            eina1.push(3)
        }
        if (eina0 > 270 && eina0 <= 360){
            eina1.push(4)
        }
        return eina1
    }

    /* Function getB0L0 */
    let T = (JD-2451545.0)/36525;
    let LL = (280.46646+36000.76983*T+0.0003032*T**2)%360;
    let M = (357.52911+35999.05029*T-0.000153*T**2)%360;
    let C = (1.914602-0.004817*T-0.000014*T**2)*Math.sin(Math.radians(M))+(0.019993-0.000101*T)*Math.sin(2*Math.radians(M))+0.000289*Math.sin(3*Math.radians(M));
    let O_ = LL + C;
    let Womiuga = 125.04-1934.136*T;
    let Lamda = O_-0.00569-0.00478*Math.sin(Math.radians(Womiuga));
    let Lamda_ = O_-1.397*T-0.00031*T**2;

    /* Astronomical Algorithms 22.2*/
    let epxlong0 = 23+26/60+21.448/3600-46.8150/3600*T-0.00059/3600*T**2+0.001813/3600*T**3;
    let L_ = 280.4665+36000.27698*T;
    let L__ = 218.3165+481267.28813*T;
    let Q = (125.04452-1934.136261*T+0.0020708*T**2+T**3/450000)%360;
    /*Astronomical Algorithms p144*/
    let depxlong = 9.20/3600*Math.cos(Q*Math.PI/180)+0.57/3600*Math.cos(2*Math.radians(L_))+0.1/3600*Math.cos(2*Math.radians(L__))-0.09/3600*Math.cos(2*Math.radians(Q));
    let epxlong = epxlong0+depxlong;
    let sita = ((JD-2398220)*360/25.38)%360;
    let I = 7.25;
    let K = 73.6667+1.3958333*(JD-2396758)/36525;
    let x = Math.degrees(Math.atan(-Math.cos(Math.radians(Lamda_))*Math.tan(Math.radians(epxlong))));
    let y = Math.degrees(Math.atan(-Math.cos(Math.radians(Lamda-K))*Math.tan(Math.radians(I))));
    let P = x+y;

    /* B0: the heliographic latitude of the center of the solar disk */
    let B0 = Math.degrees(Math.asin(Math.sin(Math.radians(Lamda-K))*Math.sin(Math.radians(I))));
    let eina = Math.degrees(Math.atan(Math.tan(Math.radians(Lamda-K))*Math.cos(Math.radians(I))));
    let LK = Lamda-K-180;
    let eina_1 = getQuadrantByEina(eina)[0];
    let LK_1 = getQuadrantByEina(LK)[0];
    if (eina_1 == LK_1) {
        eina = eina-180
    }
    let L0 = (eina-sita-100)%360;

    /// Function Calculation One //
    let Xs = xOne;
    let Ys = yOne;
    let Pm = 180 - Math.degrees(Math.atan2(xOne, yOne));
    let Rm = Math.sqrt(xOne**2+yOne**2);
    // Calculating Latitude and Longitude of the Sunspot
    let d = 0.54
    let theta = Math.radians(Pm) - Math.radians(P)-Math.PI;
    let alpha = Math.atan(Rm/R*Math.tan(Math.radians(d/2)));
    let rho1 = Math.asin(Math.sin(alpha)/Math.sin(Math.radians(d/2)))-alpha;
    let B1 = Math.degrees(Math.asin(Math.cos(rho1)*Math.sin(Math.radians(B0))+Math.sin(rho1)*Math.cos(Math.radians(B0))*Math.sin(theta)));
    let l = Math.asin(Math.cos(theta)*Math.sin(rho1)/Math.cos(Math.radians(B1)));
    let L1 = L0+Math.degrees(l);
    let rho2 = Math.radians(Math.degrees(Math.asin(Rm/R))-Math.radians(d)*(Rm/R))
    let B2 = Math.degrees(Math.asin(Math.cos(rho2)*Math.sin(Math.radians(B0))+Math.sin(rho2)*Math.cos(Math.radians(B0))*Math.cos(Math.radians(P-Pm))));
    let L2 = L0+Math.degrees(Math.asin(Math.sin(Math.radians(P-Pm))*Math.sin(rho2)*Math.cos(Math.radians(B2))));

    // Funciones para los estilos
    const [visibility, setVisibility] = useState(false);
    
    return (
        <div className='ImageAnalizer' id='AnalizerOne'>
            <div id="display-image" 
            onClick={() => {
                props.sendingB(B1);
                setVisibility(true)
            }} 
            ref={ref} 
            style={ 
                newDate > refDate?
                {backgroundImage: `url(${errorBackground})`}
                :{backgroundImage: `url("https://soho.nascom.nasa.gov/data/synoptic/sunspots/sunspots_1024_${displaiedImageDate}.jpg")`}


            }>
                    <div className="sendedAlert" id="sendedRed" 
                    style={
                        visibility === true
                        ? {display: `flex`}
                        : {display: `none`}
        
                    }>Coordenadas enviadas</div>

            </div>
            <div className="detailsContainer">
                <h4 id="detailsTitle">Selecciona una mancha</h4>
                <h5 className="coordinate-details">Coord X: {posX.toFixed(2)} px.</h5>
                <h5 className="coordinate-details">Coord Y: {posY.toFixed(2)} px.</h5>
            </div>
        </div>  
    )
}

