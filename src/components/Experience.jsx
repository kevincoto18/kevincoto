import React from 'react'
import "../styles/Experience.css"

function Experience() {
    return (
        <div>
            <section className="bodyExperience">
                <h1 id='title'>Experiencia</h1>
                <div className="cards">
                    <div class="card cardExperience">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text-body-secondary">2023 - 2024</h6>
                            <h4 class="card-title">Analista de Datos</h4>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Universidad Estatal a Distancia - Cartago, Costa Rica</h6>
                            <p class="card-text">Aplicacion de Procesos ETL en la manipulacion de datos, asi como herramientas para visualizar y generar informes detallados </p>

                            <hr />
                            <h6 class="card-subtitle mb-2 text-body-secondary">2022 - 2023</h6>
                            <h4 class="card-title">Ingeniero de Software</h4>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Asamblea Legislativa de Costa Rica - San Jose, Costa Rica</h6>
                            <p class="card-text">Participacion en proyecto Objetivos de Desarrollo Sostenible de la ONU para la agenda 2023 de
                                Costa Rica</p>
                        </div>
                    </div>
                    {/* Arriba Experiencia Card | Abajo Educacion Card */}
                    <div class="card cardExperience">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text-body-secondary">2022 - Actual</h6>
                            <h4 class="card-title">Bachillerato Ingenieria Informatica</h4>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Universidad Estatal a Distancia (UNED)</h6>
                            <p class="card-text"> Aprendizaje en conceptos de Big Data, Analisis de Datos, creacion y administracion de proyectos informaticos  </p>

                            <hr />
                            <h6 class="card-subtitle mb-2 text-body-secondary">2020 - 2022</h6>
                            <h5 class="card-title">Diplomado Tecnologias de Informacion</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Colegio Universitario de Cartago (CUC)</h6>
                            <p class="card-text">Aprendizaje de multiples tecnologias como lenguajes de programacion, manejo de versionamiento de codigo y Administracion de Bases de Datos</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Experience