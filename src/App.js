import { useState } from "react";
import "./App.css";

import Game from "./Components/Game";
import Result from "./Components/Result";

const info = [
  {
    title: "Die Hauptstadt von Aserbaidschan ?",
    variants: ["Khankendi", "Baku", "Schuscha"],
    correct: 1,
  },
  {
    title: "Die größte Stadt von der Türkei für die Population",
    variants: ["Istanbul", "Ankara", "Izmir"],
    correct: 0,
  },
  {
    title: "Der größte Ozean ",
    variants: ["Atlantik", "Pazifik", "Indischer Ozean"],
    correct: 1,
  },
  {
    title: "Der Anfang des ersten Weltkriegs",
    variants: ["1918", "1914", "1938"],
    correct: 1,
  },
  {
    title: "Die Langform von DNA",
    variants: [
      "Desoxyribonukleinelement",
      "Desoxyribonukleinsäure",
      "Desoxyribonukleinasit",
    ],
    correct: 1,
  },
  {
    title: "Die Größe von Siegessäule",
    variants: ["67 m", "70m", "55m"],
    correct: 0,
  },
  {
    title: "Die größte Kontinent der Welt",
    variants: ["Asien", "Europa", "Afrika"],
    correct: 0,
  },
  {
    title: "Der Artikel vom Jogurt",
    variants: ["das", "der", "der/das"],
    correct: 2,
  },
  {
    title: "Die Gründung von BMW",
    variants: ["07 März 1916", "12 April 1926", "22 September 1911"],
    correct: 0,
  },
  {
    title: "Der Endung des zweiten Weltkriegs",
    variants: ["1947", "1941", "1945"],
    correct: 2,
  },
];

function App() {
  const [data, setData] = useState(0);
  const [richtigAntwort, setRichtigAntwort] = useState(0);
  const frage = info[data];

  const onclickFunktion = (index) => {
    setData((data) => data + 1);

    if (index === frage.correct) {
      setRichtigAntwort((richtigAntwort) => richtigAntwort + 1);
    }
  };

  return (
    <div className="App">
      {data !== info.length ? (
        <Game
          info={info}
          frage={frage}
          onclickFunktion={onclickFunktion}
          data={data}
        />
      ) : (
        <Result richtigAntwort={richtigAntwort} info1={info} />
      )}
    </div>
  );
}

export default App;
