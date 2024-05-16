import React from "react";
import "../styles/Aboutme.css"
import databaseSVG from "../svg/database.svg";
import analysis from "../svg/analysis.svg"
import programmer from "../svg/programmer.svg"

function Aboutme() {
    const KevinCV = () => {

        window.open(process.env.PUBLIC_URL + '/data/KevinCV.pdf');
    };
    const KevinResume = () => {

        window.open(process.env.PUBLIC_URL + '/data/KevinResume.pdf');
    };
    return <div className="body">
        <h1 id="title">Acerca de Mi</h1>
        <section className="container">
            <div className="image">
                <img src="https://bolby-react.vercel.app/images/avatar-2.svg" alt="" srcset="" />
            </div>
            <div className="card" >

                <div className="card-body">

                    <p className="card-text">¡Hola! Mi nombre es Kevin Coto, nacido en Costa Rica y desde los 17 años me ha apasionado el mundo de las Tecnologias de Informacion, soy una persona curiosa y me encanta estar en un constante aprendizaje en lo que me apasiona lo cual es la Programacion, Analisis de Datos y Bases de Datos</p>
                    <hr />
                    <h6 id="resumetitle">¡Mira mi Curriculum Vitae!</h6>
                    <div class="btn-group CVGroup " role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary btnresume" onClick={KevinCV}>Español</button>
                        <button type="button" class="btn btn-primary btnresume" onClick={KevinResume}>Ingles</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="Services">
            <h1 id="title">Conocimiento</h1>
            <div className="cards">
                <div class="card knowledge" id="DataBase">
                    <img src={databaseSVG} className="card-img-top cardimg" alt="10px" />
                    <div class="card-body" id="DataBase">
                        <h5 class="card-title cardtitle">Bases de Datos</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, nisi ullam dolorem voluptatibus nam nostrum non inventore incidunt placeat voluptatem facilis eligendi eum dolor, esse cupiditate aperiam reiciendis? Debitis, veniam!</p>

                    </div>
                </div>
                <div class="card knowledge" id="Code" >
                    <img src={programmer} className="card-img-top cardimg" alt="10px" />
                    <div class="card-body" id="Code">
                        <h5 class="card-title cardtitle">Programacion</h5>
                        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut delectus neque ex iste atque beatae eaque voluptatum dolore doloribus provident saepe aliquid labore exercitationem quia dolorem, assumenda sunt voluptates autem.</p>

                    </div>
                </div>
                <div class="card knowledge" id="Analyts">
                    <img src={analysis} className="card-img-top cardimg" alt="10px" />
                    <div class="card-body" id="Analyts">
                        <h5 class="card-title cardtitle">Analisis de Datos</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates odio provident similique soluta debitis quo tenetur, distinctio laboriosam laudantium neque blanditiis ut beatae quas. Soluta saepe aliquam dicta explicabo.</p>

                    </div>
                </div>

            </div>
            <br />
        </section>
    </div>

}

export default Aboutme;
