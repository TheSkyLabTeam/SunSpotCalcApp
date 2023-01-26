import React from 'react'
import './Styles/AppNavbar.css'
import {Link} from 'react-scroll'
import 'aos/dist/aos.css';

export const AppNavbar = () => {
  return (
    <div id='AppNavbar' data-aos="fade-up" data-aos-once="true">
        <Link className="linkButton" id='linkDate' to="dateSelectorContainer" spy={true} smooth={true} offset={-100} duration={500}>D</Link>
        <Link className="linkButton" id='linkOne' to="AnalizerOne" spy={true} smooth={true} offset={-110} duration={500}>01</Link>
        <Link className="linkButton" id='linkTwo' to="AnalizerTwo" spy={true} smooth={true} offset={-110} duration={500}>02</Link>
        <Link className="linkButton" id='linkThree' to="AnalizerThree" spy={true} smooth={true} offset={-110} duration={500}>03</Link>
        <Link className="linkButton" id='linkFour' to="AnalizerFour" spy={true} smooth={true} offset={-430} duration={500}>04</Link>
        <Link className="linkButton" id='linkFive' to="resultTitle" spy={true} smooth={true} offset={-100} duration={500}>R</Link>
    </div>
  )
}
