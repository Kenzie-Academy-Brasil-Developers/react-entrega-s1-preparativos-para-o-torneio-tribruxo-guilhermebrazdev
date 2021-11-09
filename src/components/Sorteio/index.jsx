import Card from "../Card";

import "./sorteio.css";

function Sorteio({ jogadores, random }) {
  return (
    <div id="showCards">
      <div id="title">
        <h1>Sorteados </h1>
      </div>
      <div id="cardBox">
        {jogadores.map((element, index) => (
          <Card key={index} personagem={element} />
        ))}
      </div>
      <button className="botao" onClick={() => random()}>
        Tentar Novamente
      </button>
    </div>
  );
}

export default Sorteio;
