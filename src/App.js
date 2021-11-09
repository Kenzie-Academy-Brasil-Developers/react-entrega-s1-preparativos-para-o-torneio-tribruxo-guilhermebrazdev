import Sorteio from "./components/Sorteio";
import Menu from "./components/Menu";
import "./assets/casas_harry_potter.png";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState(true);
  const [characterList, setCharacterList] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) =>
        setCharacterList(response.filter((item) => item.image !== ""))
      )
      .catch((err) => console.log(err));
  });

  function randomNum() {
    let randomPlayers = [];

    let n1 = Math.floor(Math.random() * characterList.length);
    let n2;
    let n3;

    randomPlayers.push(characterList[n1]);

    randN2();

    function randN2() {
      n2 = Math.floor(Math.random() * characterList.length);
      checkN2();
    }

    function checkN2() {
      if (characterList[n2].house !== randomPlayers[0].house) {
        randomPlayers.push(characterList[n2]);
        randN3();
      } else {
        randN2();
      }
    }

    function randN3() {
      n3 = Math.floor(Math.random() * characterList.length);
      checkN3();
    }

    function checkN3() {
      if (
        characterList[n3].house !== randomPlayers[0].house &&
        characterList[n3].house !== randomPlayers[1].house
      ) {
        randomPlayers.push(characterList[n3]);
      } else {
        randN3();
      }
    }
    setPlayers(randomPlayers);
    setScreen(false);

    console.log(players);
  }

  return (
    <div className="App">
      <header className="App-header">
        {screen ? (
          <Menu random={randomNum} />
        ) : (
          <Sorteio jogadores={players} random={randomNum} />
        )}
      </header>
    </div>
  );
}

export default App;
