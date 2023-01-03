import React from "react";

import "./Result.css";

import icon from "../img/firework.png";

function Result({ richtigAntwort, info }) {
    return (
        <section className="mainResultContainer">
            <article className="articleResult">
                <img src={icon} alt="" />
                <h1>
                    Sie haben {richtigAntwort} Fragen von {info.length} richtig
                    beantwortet!{" "}
                </h1>
                <a href=".">
                    <button>Neu starten</button>
                </a>
            </article>
        </section>
    );
}

export default Result;
