import React from 'react'
import '../styles/Tecnologias.css'
import { Slide } from 'react-awesome-reveal';

// Logos

import csharp from '../svg/technologies/csharp.svg';
import python from '../svg/technologies/python.svg';
import java from '../svg/technologies/java.svg';
import JavaScript from '../svg/technologies/javascript.svg';
import mysql from '../svg/technologies/mysql.svg';
import sqlserver from '../svg/technologies/sql-server.svg';
import react from '../svg/technologies/react.svg';
import angular from '../svg/technologies/angular.svg';
import spring from '../svg/technologies/spring.svg';
import PowerBi from '../svg/technologies/powerbi.svg';

function Tecnologias() {

    const logos = [
        { src: java, alt: 'Logo 1' },
        { src: csharp, alt: 'Logo 2' },
        { src: python, alt: 'Logo 3' },
        { src: JavaScript, alt: 'Logo 4' },
        { src: sqlserver, alt: 'Logo 5' },
        { src: mysql, alt: 'Logo 6' },
        { src: react, alt: 'Logo 7' },
        { src: angular, alt: 'Logo 8' },
        { src: spring, alt: 'Logo 9' },
        { src: PowerBi, alt: 'Logo 10' },

    ];
    return (
        <div className="tecnologias">
            <hr id='linea' />
            <Slide triggerOnce direction='up'>
                <h2 id="titleTecnologias">Tecnologías</h2>
            </Slide>
            <Slide direction='up' triggerOnce cascade>
                <div className="logos-container d-flex justify-content-center flex-wrap">
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-item d-flex justify-content-center align-items-center m-3">
                            <img src={logo.src} alt={logo.alt} className="img-fluid logo" />
                        </div>
                    ))}
                </div>
            </Slide>

        </div>
    )
}

export default Tecnologias