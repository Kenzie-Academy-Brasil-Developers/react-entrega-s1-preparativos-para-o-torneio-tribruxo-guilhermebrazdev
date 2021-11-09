function Menu({ random }) {
  return (
    <div id="initial">
      <div id="title">
        <h1>Torneio Tribruxo</h1>
      </div>

      <div id="description">
        <p>Clique no botão para encontar os feiticeiros</p>
      </div>

      <button className="botao" onClick={() => random()}>
        Começar!
      </button>
    </div>
  );
}

export default Menu;
