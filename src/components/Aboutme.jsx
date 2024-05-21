import React from "react";
import "../styles/Aboutme.css"
import databaseSVG from "../svg/database.svg";
import analysis from "../svg/analysis.svg"
import programmer from "../svg/programmer.svg"
import Avatar2 from '../svg/try2.jpg'
import { Slide } from "react-awesome-reveal";

function Aboutme() {
    const KevinCV = () => {

        window.open(process.env.PUBLIC_URL + '/data/KevinCV.pdf');
    };
    const KevinResume = () => {

        window.open(process.env.PUBLIC_URL + '/data/KevinResume.pdf');
    };
    return <div className="body">
        <Slide triggerOnce direction="up" fraction={1}>
            <h1 id="title">Acerca de Mi</h1>
        </Slide>

        <Slide triggerOnce fraction={0.5} >
            <section className="container">

                <div className="image">
                    <img src={Avatar2} alt="" srcset="" id="foto" />
                </div>

                <div className="card" >

                    <div className="card-body">

                        <p className="card-text">¡Hola! Mi nombre es Kevin Coto, nacido en Costa Rica. Desde los 17 años, me ha apasionado el mundo de las Tecnologías de la Información. Soy una persona curiosa y me encanta estar en constante aprendizaje en lo que me apasiona, que es la Programación, el Análisis de Datos y las Bases de Datos.</p>
                        <hr />
                        <h6 id="resumetitle">¡Mira mi Curriculum Vitae!</h6>
                        <div class="btn-group CVGroup " role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary btnresume" onClick={KevinCV}>Español</button>
                            <button type="button" class="btn btn-primary btnresume" onClick={KevinResume}>Ingles</button>
                        </div>
                    </div>
                </div>

            </section>
        </Slide>
        <section className="Services">
            <Slide triggerOnce direction="up" fraction={1}>
                <h1 id="title">Conocimiento</h1>
            </Slide>
            <Slide triggerOnce direction="up" fraction={0}>
                <div className="cards">
                    <div class="card knowledge" id="DataBase">
                        <img src={databaseSVG} className="card-img-top cardimg" alt="10px" />
                        <div class="card-body" id="DataBase">
                            <h5 class="card-title cardtitle">Bases de Datos</h5>
                            <p class="card-text">Experiencia en la creación y administración de bases de datos relacionales como SQL Server, MySQL y Oracle Database. Dominio de sentencias básicas como WHERE y GROUP BY, así como de funciones avanzadas como SUM, MAX/MIN y Count. Capacidad para diseñar y gestionar tablas temporales. Además, manejo experto de procedimientos almacenados, triggers, roles y usuarios en entornos de bases de datos. </p>

                        </div>
                    </div>
                    <div class="card knowledge" id="Code" >
                        <img src={programmer} className="card-img-top cardimg" alt="10px" />
                        <div class="card-body" id="Code">
                            <h5 class="card-title cardtitle">Programación</h5>
                            <p class="card-text">Conocimiento en lenguajes como Java, C# y Python, tanto en paradigmas de programación orientada a objetos como funcional. Experiencia en la implementación del patrón de diseño Modelo-Vista-Controlador (MVC), siguiendo metodologías ágiles como SCRUM o XP. Manejo de frameworks como React o Spring Boot y creación de APIs RESTful. </p>

                        </div>
                    </div>
                    <div class="card knowledge" id="Analyts">
                        <img src={analysis} className="card-img-top cardimg" alt="10px" />
                        <div class="card-body" id="Analyts">
                            <h5 class="card-title cardtitle">Análisis de Datos</h5>
                            <p class="card-text">Conocimiento en el proceso ETL (Extract - Transform - Load) de datos, manipulación y limpieza de datos, ejecución de consultas y manejo de herramientas como Power BI, SQL Server y Excel. Experiencia en el uso de bibliotecas como Pandas y NumPy en Python, y un enfoque de aprendizaje constante en la integración con servicios en la nube como AWS.</p>

                        </div>
                    </div>

                </div>
            </Slide>
            <br />
        </section>

    </div>

}

export default Aboutme;
