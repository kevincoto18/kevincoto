import "../styles/Main.css";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Avatar } from "@nextui-org/avatar";

function Main() {
    const [texto] = useTypewriter({
        words: ['Programador', 'Analista de Datos', 'Aprendiz de Cloud Computing'],
        loop: { delay: 2000 },
    });
    return (
        <div className="presentation">
            <div className="intro">
                <div className="imagen">

                    <Avatar src="https://bolby-react.vercel.app/images/avatar-1.svg" className="w-20 h-20 text-large" />
                </div>
                <h1>Kevin Coto</h1>
                <div className="text">
                    <span className="text first-text"> Yo soy </span>
                    <span className="text Second-text"> {texto}</span>
                    <Cursor />
                </div>
                <div className="social_media"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#f3f4f5"
                    fill-opacity="1"
                    d="M0,64L18.5,74.7C36.9,85,74,107,111,149.3C147.7,192,185,256,222,245.3C258.5,235,295,149,332,128C369.2,107,406,149,443,144C480,139,517,85,554,85.3C590.8,85,628,139,665,138.7C701.5,139,738,85,775,85.3C812.3,85,849,139,886,149.3C923.1,160,960,128,997,101.3C1033.8,75,1071,53,1108,69.3C1144.6,85,1182,139,1218,144C1255.4,149,1292,107,1329,80C1366.2,53,1403,43,1422,37.3L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}

export default Main;

// refce
