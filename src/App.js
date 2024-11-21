import React from 'react';
import './compra.css'; // Correção na importação do CSS

function Compra() {
  return (
    <div>
      <nav className="superior">
        <img src="logo.png" alt="Logo" id="logo_2" />
        <div id="escrito">Site Empregador de Trabalhadores Autônomos</div>
        <div id="conjunto">
          <div className="botao_bell">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="botao_cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </nav>
      <main>
        <div className="caixa-de-compra">
          <h2>Compra concluída!</h2>
          <p id="aviso">Seu pedido foi processado com sucesso</p>
        </div>
      </main>
    </div>
  );
}

export default Compra;
