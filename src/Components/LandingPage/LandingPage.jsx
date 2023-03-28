import React from 'react'
import { InstructionComponent } from './Instructions/InstructionComponent'
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import './LandingPage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowDownSquare } from 'react-bootstrap-icons';
AOS.init();

const LandingPage = () => {
  return (
    <div id='langindPage'>
      {/* Header */}
      <section id="header">
        <div className="rainbowHeader" id='rainbowOne'>
          <div className="colorBar" id='colorRed'></div>
          <div className="colorBar" id='colorYellow'></div>
          <div className="colorBar" id='colorGreen'></div>
          <div className="colorBar" id='colorBlue'></div>
          <div className="colorBar" id='colorPurple'></div>
        </div>
        <div id="SunHeaderImageContainer" data-aos="fade-up" data-aos-duration="500"></div>
        <div id="headerPrincipalTextContainer" data-aos="fade-up" data-aos-duration="800">
          <h5 className='headerSubtitle'>presentamos</h5>
          <h1 id='headerTitle'>SunSpotCalc</h1>
          <p id='headerParagraph'>La manera precisa y fácil de calcular la rotación del sol usando imágenes</p>

          <h6 id='goingInstructions'><ScrollLink to='instructionSection' spy={true} smooth={true} offset={-20} duration={500}>Instrucciones -{'>'} </ScrollLink></h6>
        </div>
      </section>

      <section id="instructionSection" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
        <h1 className='sectionTitle' id='instructionTitle' >Paso a paso</h1>
        <h6 className='sectionSubtitle' id='instructionSubtitle'>
          Esta aplicación ha sido diseñada con el objetivo de calcular la rotación diferencial del sol haciendo uso de las 
          manchas solares que vemos en el disco solar. Para usar SunSpotCalc es tan fácil como realizar los siguientes pasos.
        </h6>
        <div id="detailInstructionContainer" >
          <InstructionComponent number="01"/>
          <InstructionComponent number="02"/>
          <InstructionComponent number="03"/>
          <InstructionComponent number="04"/>
        </div>
      </section>

      <section id="callToActionSection" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
        
        <div className="actionRow" id="oneRowAction">
          <h1 className="sectionTitle" id="actionTitle">Experimenta</h1>
          <h6 className="sectionSubtitle" id="actionSubtitle">¡Prueba SunSpotCal ahora!</h6>
        </div>
        <div className="actionRow" id='twoRowAction'>
          <h6 className="sectionSubtitle" id="actionSubtitle">Descubre porque SunSpotCalc es la mejor aplicación para calcular la rotación del sol. 
            Prueba la app <Link to="/App" id='actionLink'>aqui</Link>
          </h6>
        </div>
      </section>
    </div>
  )
}

export default LandingPage