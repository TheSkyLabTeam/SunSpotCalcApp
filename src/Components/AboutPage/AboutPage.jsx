import React from 'react'
import './AboutPage.css'
import ecuacionVelocidadAngular from '../AboutPage/ecuacionVelocidadAngular.svg'
import ecuacionPeriodoRotacion from '../AboutPage/periodoDeRotacion.svg' 

export const AboutPage = () => {
  return (
    <div id='aboutPage'>
        <h1 className='aboutTitle' id='conoceTitle'>Conoce más</h1>
        <p className='aboutParagraf'>Esta aplicación ha sido diseñada y optimizada por un equipo de curiosos aventureros de la ciencia, 
            particularmente del Grupo Alfa Centauri (@alfacentauriutb), 
            del semillero de investigación de la Universidad Tecnológica de Bolivar (utb.edu.co) 
            en Cartagena de Indías, Colombia.
            <br></br>
            <br></br>
            No hay cálculos extensos, pero cualquiera puede comunicarse 
            con los creadores si tienen interés y con mucho gusto atenderemos sus comentarios, sugerencias y/o peticiones.
        </p>
        <h1 className='aboutTitle' id='teamTitle'>Equipo</h1>
        <p className="aboutParagraf" id='teamParagraf'>
            Daniel David Herrera Acevedo (acevedod at utb.edu.co).
            <br />
            Github: <a className='githubLink' href="https://github.com/daniherreraa">daniherreraa</a>
            <br />
            <br />
            David Sierra Porta (dporta at utb.edu.co).
            <br />
            Github: <a className='githubLink' href="https://github.com/sierraporta">sierraporta</a>
        </p>
        <h1 className="aboutTitle" id="instructionTitleAbout">Instrucciones</h1>
        <p className="aboutParagraf" id="instructionParagraf">
        La dinámica es muy sencilla. En la siguiente pantalla usted podrá cargar cuatro imágenes para cuatro días consecutivos 
        y observar una mancha solar cada día. A primera vista verá que la mancha solar se mueve a través del disco solar, 
        esto es debido a la rotación particular del sol. No necesita hacer muchos cálculos, 
        pero si quiere saber más de cómo esto funciona 
        lo invitamos a revisar la siguiente dirección: <span id='lighterGreen'><a href='https://www.cosmos.esa.int/documents/519784/1185714/teachers_guide/6fd53676-55b4-415d-9fff-e27f6270ca70'>CESAR - Science Case</a></span><br/>
        <br/>
        Para cada mancha o grupo solar que puedan seguir, los usuarios deberán calcular la velocidad angular de la mancha o grupo utilizando la siguiente fórmula: 
        </p>
        <br />
        <img src={ecuacionVelocidadAngular} className="aboutEquations" alt="Ecuacion velocidad angular" />
        <p className="aboutParagraf" id="instructionParagraf">
          en la cual ω se medie en grados por día. Así, por ejemplo, si en dos días un grupo ha cambiado su longitud en 26°, 
          la velocidad angular = 26°/2 =13°/día.
        </p>
        <br/>
        <p className="aboutParagraf" id="instructionParagraf">
        Los usuarios deben medir primero la velocidad angular con un día de diferencia y luego medirla durante los cuatro días completos. A continuación, pueden promediar su velocidad angular durante todo el período para ayudar a eliminar los problemas encontrados debido a que las posiciones de las manchas son difíciles de de estimar con precisión. También pueden medir la velocidad angular de otras manchas y grupos y comparar sus valores para cada uno.
        <br />
        <br />
        Los usuarios utilizan ahora sus valores de la velocidad angular media para calcular el tiempo que tardan las manchas en dar una vuelta completa al Sol, encontrando así el periodo de rotación del Sol. Recuerda que un círculo completo tiene 360°.
        </p>
        <br/>
        <img src={ecuacionPeriodoRotacion} className="aboutEquations" alt="Ecuacion periodo de rotación"/>
        <br />
        <p className="aboutParagraf" id="instructionParagraf">
        Así, por ejemplo, si la velocidad angular es de 13° por día, entonces el período sería de 360°/(13°/día)=28 días. 
        <br/>
        <br/>
        Cada usuario debe obtener su propio valor del periodo de rotación y debe deducir su propio valor del periodo de rotación y luego si hay más usuarios, pueden reunirse y compartir sus respuestas, explicando cómo las calcularon.
        Manos a las manchas….!
        </p>
        <br />
        <br />
        <p id="loveParagraf">Hecho con ❤️ por The Skylab Team</p>
    </div>
  )
}
