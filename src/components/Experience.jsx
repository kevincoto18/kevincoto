import React from 'react'
import "../styles/Experience.css"
import { Slide } from 'react-awesome-reveal'

function Experience() {
    return (
        <div>
            <section className="bodyExperience">
                <Slide triggerOnce direction="up" fraction={1}>
                    <h1 id='title'>Experiencia</h1>
                </Slide>

                <div className="cards">

                    <div class="card cardExperience">

                        <div class="card-body">
                            <Slide direction='up'>
                                <h6 class="card-subtitle mb-2 text-body-secondary">2024 - 2025</h6>
                                <h4 class="card-title">Ingeniero de Software Full Stack</h4>
                                <h6 class="card-subtitle mb-2 text-body-secondary">GrupoMAS - San Jose, Costa Rica</h6>
                                <p class="card-text">Desarrollé aplicaciones internas utilizando Visual Studio con C# y React, enfocándome en la migración de sistemas legacy a soluciones modernas mediante la creación de módulos clave.</p>

                                <hr />
                                <h6 class="card-subtitle mb-2 text-body-secondary">2022 - 2023</h6>
                                <h4 class="card-title">Ingeniero de Software (Pasantia)</h4>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Asamblea Legislativa de Costa Rica - San Jose, Costa Rica</h6>
                                <p class="card-text">Participacion en proyecto Objetivos de Desarrollo Sostenible de la ONU para la agenda 2023 de Costa Rica el cual colabore en el desarrollo de modulos para la clasificacion de diferntes proyectos de ley</p>
                            </Slide>
                        </div>

                    </div>
                    {/* Arriba Experiencia Card | Abajo Educacion Card */}
                    <div class="card cardExperience">
                        <div class="card-body">
                            <Slide direction='up'  >
                                <h6 class="card-subtitle mb-2 text-body-secondary">2022 - 2025</h6>
                                <h4 class="card-title">Bachillerato Ingenieria Informatica</h4>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Universidad Estatal a Distancia (UNED)</h6>
                                <p class="card-text"> Aprendizaje en conceptos de Big Data, Analisis de Datos, creacion y administracion de proyectos informaticos y desarrollo de software siguiendo las mejores practicas de codigo limpio </p>

                                <hr />
                                <h6 class="card-subtitle mb-2 text-body-secondary">2020 - 2022</h6>
                                <h5 class="card-title">Diplomado Tecnologias de Informacion</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Colegio Universitario de Cartago (CUC)</h6>
                                <p class="card-text">Aprendizaje de multiples tecnologias como lenguajes de programacion, manejo de versionamiento de codigo y Administracion de Bases de Datos</p>
                            </Slide>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    )
}

export default Experience