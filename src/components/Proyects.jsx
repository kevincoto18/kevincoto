import React from 'react'
import '../styles/Proyects.css'
import { Slide } from 'react-awesome-reveal'
import Onu from "../svg/UN_emblem_blue.svg";
import Survey from "../svg/survey.svg"
import Web from "../svg/web.svg"


function Proyects() {



    const Lavacar = () => {

        window.open('https://dondegidolavacar.000webhostapp.com/');
    };
    return (
        <div className='ProyectsContainer'>

            <Slide triggerOnce direction="up" fraction={1}>
                <h1 id="title">Proyectos </h1>
            </Slide>
            <Slide triggerOnce direction='up' fraction={0}>
                <div className="cards" id='ProyectsCards'>
                    <div class="card knowledge" id="CardONU">
                        <img src={Onu} className="card-img-top cardimg" alt="10px" />
                        <div class="card-body" id="CardONU">
                            <h5 class="card-title cardtitle">Objetivos de Desarrollo Sostenible</h5>
                            <hr />
                            <p class="card-text">Práctica supervisada en la <a href="https://www.asamblea.go.cr/SitePages/Inicio.aspx" class="link-offset-2 link-underline link-underline-opacity-0">Asamblea Legislativa de Costa Rica</a>, donde colaboré en el <a href="https://ods.cr/" class="link-offset-2 link-underline link-underline-opacity-0">Proyecto ODS</a> para la Agenda 2030 en el país. Durante esta experiencia, utilicé tecnologías como C#, Python, JavaScript, HTML, CSS y gestioné bases de datos con Oracle SQL Developer. Además, participé en la creación de tablas, procedimientos almacenados y triggers</p>

                        </div>
                    </div>

                    <div class="card knowledge" id="CardBWork">
                        <img src={Survey} className="card-img-top cardimg" alt="10px" />
                        <div class="card-body" id="CardBWork">
                            <h5 class="card-title cardtitle">B-Work</h5>

                            <hr />
                            <p class="card-text">Colaboración con empresa <a href="https://b-solutionsgroup.com/es/" class="link-offset-2 link-underline link-underline-opacity-0">B Solutions Group</a>  y  <a href="https://aymconsultores.com/" class="link-offset-2 link-underline link-underline-opacity-0">AyM Consultores</a> en el desarrollo de un proyecto web con el objetivo de darle una trazabilidad al clima organizacional, en este proyecto se utilizan tecnologías como C# con Entity Framework en Visual Studio 2022, además,para el almacenamiento de datos Sql Server 2019 y el hosting Windows Server 2016 </p>

                        </div>
                    </div>

                </div>

            </Slide>
        </div>

    )
}

export default Proyects