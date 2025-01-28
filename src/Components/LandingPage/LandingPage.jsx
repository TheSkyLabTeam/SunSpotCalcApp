import React from "react";
import { InstructionComponent } from "./Instructions/InstructionComponent";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./LandingPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowDownSquare } from "react-bootstrap-icons";
AOS.init();

const LandingPage = () => {
  return (
    <div id="langindPage">
      {/* Header */}
      <section id="header">
        <div className="rainbowHeader" id="rainbowOne">
          <div className="colorBar" id="colorRed" />
          <div className="colorBar" id="colorYellow" />
          <div className="colorBar" id="colorGreen" />
          <div className="colorBar" id="colorBlue" />
          <div className="colorBar" id="colorPurple" />
        </div>
        <div
          id="SunHeaderImageContainer"
          data-aos="fade-up"
          data-aos-duration="500"
        />
        <div
          id="headerPrincipalTextContainer"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="headerSubtitle">presentamos</h5>
          <h1 id="headerTitle">SunSpotCalc</h1>
          <p id="headerParagraph">
            La manera precisa y fácil de calcular la rotación del sol usando
            imágenes
          </p>

          <h6 id="goingInstructions">
            <ScrollLink
              to="instructionSection"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Instrucciones -{">"}{" "}
            </ScrollLink>
          </h6>
        </div>
      </section>

      <section
        id="sunspotSection"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <h1 className="sectionTitle">Manchas Solares</h1>
        <h6 className="sectionSubtitle">
          Las manchas solares son regiones oscuras en la superficie del Sol que
          nos revelan secretos sobre su actividad y comportamiento.
        </h6>
        <div id="sunspotInfoContainer">
          <div
            className="infoBlock"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>¿Qué son?</h3>
            <p>
              Son regiones oscuras y frías en la superficie solar, causadas por
              intensos campos magnéticos. A pesar de su apariencia, pueden ser
              varias veces más grandes que la Tierra.
            </p>
          </div>
          <div
            className="infoBlock"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <h3>Ciclos Solares</h3>
            <p>
              Las manchas solares siguen ciclos de aproximadamente 11 años,
              alternando entre períodos de alta actividad (máximo solar) y baja
              actividad (mínimo solar), afectando el clima espacial y las
              comunicaciones terrestres.
            </p>
          </div>
          <div
            className="infoBlock"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
          >
            <h3>Importancia</h3>
            <p>
              El estudio de las manchas solares nos ayuda a comprender la
              dinámica del Sol y su rotación diferencial, donde las zonas
              ecuatoriales giran más rápido que las polares, afectando todo el
              Sistema Solar.
            </p>
          </div>
        </div>
      </section>

      <section
        id="statsSection"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <h1 className="sectionTitle">Datos Fascinantes</h1>
        <h6 className="sectionSubtitle">
          Descubre algunas estadísticas sorprendentes sobre las manchas solares
          y los ciclos solares
        </h6>
        <div id="statsContainer">
          <div
            className="statItem"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>11 Años</h3>
            <p>
              Duración típica de un ciclo solar, aunque puede variar entre 9 y
              14 años.
            </p>
          </div>
          <div
            className="statItem"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <h3>201 Manchas</h3>
            <p>
              Número máximo mensual promedio de manchas registradas en el ciclo
              solar 19 (1954-1964).
            </p>
          </div>
          <div
            className="statItem"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <h3>24-25 Días</h3>
            <p>
              Tiempo de rotación del Sol en el ecuador, mientras que en los
              polos puede tomar hasta 35 días.
            </p>
          </div>
          <div
            className="statItem"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <h3>100,000 km</h3>
            <p>
              Diámetro máximo de una mancha solar, suficiente para albergar
              múltiples planetas como la Tierra.
            </p>
          </div>
          <div
            className="statItem"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
          >
            <h3>Mínimo de Maunder</h3>
            <p>
              Período entre 1645-1715 con muy pocas manchas solares,
              coincidiendo con la Pequeña Edad de Hielo.
            </p>
          </div>
        </div>

        <p>
          Estos datos no solo ilustran la magnitud e importancia de las manchas
          solares, sino que también invitan a explorar cómo los ciclos solares
          afectan tanto a nuestro planeta como al entorno espacial más amplio.
        </p>

        <img id="StatsImage" src="/public/statsImage.jpeg" alt="StatsImage" />
        <p id="imageStatDescription">
          Figura construida a partir de los datos de: Source: WDC-SILSO, Royal
          Observatory of Belgium, Brussels
        </p>
      </section>

      <section
        id="instructionSection"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <h1 className="sectionTitle" id="instructionTitle">
          Paso a paso
        </h1>
        <h6 className="sectionSubtitle" id="instructionSubtitle">
          Esta aplicación ha sido diseñada con el objetivo de calcular la
          rotación diferencial del sol haciendo uso de las manchas solares que
          vemos en el disco solar. Para usar SunSpotCalc es tan fácil como
          realizar los siguientes pasos.
        </h6>
        <div id="detailInstructionContainer">
          <InstructionComponent number="01" />
          <InstructionComponent number="02" />
          <InstructionComponent number="03" />
          <InstructionComponent number="04" />
        </div>
      </section>

      <section
        id="callToActionSection"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <div className="actionRow" id="oneRowAction">
          <h1 className="sectionTitle" id="actionTitle">
            Experimenta
          </h1>
          <h6 className="sectionSubtitle" id="actionSubtitle">
            ¡Prueba SunSpotCal ahora!
          </h6>
        </div>
        <div className="actionRow" id="twoRowAction">
          <h6 className="sectionSubtitle" id="actionSubtitle">
            Descubre porque SunSpotCalc es la mejor aplicación para calcular la
            rotación del sol. Prueba la app{" "}
            <Link to="/App" id="actionLink">
              aqui
            </Link>
          </h6>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
