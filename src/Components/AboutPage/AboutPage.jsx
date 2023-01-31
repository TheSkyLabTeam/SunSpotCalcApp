import React from 'react'
import './AboutPage.css'

export const AboutPage = () => {
  return (
    <div id='aboutPage'>
        <h1 className='aboutTitle' id='conoceTitle'>Conoce más</h1>
        <p className='aboutParagraf'>Esta aplicación ha sido diseñada y optimizada por un equipo de curiosos aventureros de la ciencia, 
            particularmente del Grupo Alfa Centauri (incluir redes sociales del grupo IG, FB), 
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
            <br></br>
            David Sierra Porta (dporta at utb.edu.co).
            <br></br>
            Esperamos que les guste. Agradecemos cualquier comentario que tenga.
        </p>
        <div id='loveParagraf'>Hecho con ❤️ por The SkyLab Team</div>
    </div>
  )
}
