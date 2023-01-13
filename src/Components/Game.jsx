import React from "react";

import "./Game.css";

function Game({ info, frage, onclickFunktion, data }) {
    const linie = Math.round((data / info.length) * 100);

    //Hallo man

    return (
        <section className="mainContainer">
            <article className="articleContainer">
                <div className="progres">
                    <div style={{ width: `${linie}%` }} className="colorLinie"></div>
                </div>
                <h1>{frage.title}</h1>
                <ul>
                    {frage.variants.map((e, index) => {
                        return (
                            <li onClick={() => onclickFunktion(index)} key={e}>
                                {e}
                            </li>
                        );
                    })}
                </ul>
            </article>
        </section>
    );
}

export default Game;
