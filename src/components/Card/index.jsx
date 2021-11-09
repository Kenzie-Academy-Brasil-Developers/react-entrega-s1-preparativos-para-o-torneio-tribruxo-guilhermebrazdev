import "./card.css";

function Card({ personagem }) {
  return (
    <div className="singleCard">
      <div id="nome">
        <h2>{personagem.name}</h2>
      </div>

      <div id="image">
        <img id={personagem.house} src={personagem.image} alt="Foto Jogador" />
      </div>

      <div id="casa">
        <p>{personagem.house}</p>
      </div>
    </div>
  );
}

export default Card;
