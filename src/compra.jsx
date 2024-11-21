import React from 'react';
import './compra.css'; // Importe o arquivo CSS
import logo from './img/LOGO.png'
import carrinho from './img/carrinho.png'; // Importe a imagem do carrinho

const Compra = () => {
  return (
    <>
      <nav className="superior">
        <img src={logo} alt="Logo" id="logo_2" />

        <div id="escrito">Site Empregador de Trabalhadores Autônomos</div>

        <div id="conjunto">
          <section className="search_fil">
            <div id="search">
              <div id="botao_filtro">
                <i className="fa-solid fa-bars"></i>
              </div>

              <input
                type="text"
                name="BarraDePesquisa"
                placeholder="Ex: Cursos de programação"
                id="BarraDePesquisa"
              />

              <div id="botao_search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </section>

          <div className="botao_bell">
            <i className="fa-solid fa-bell"></i>
          </div>

          <div className="botao_cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>

          <div className="user">
            <i className="fa-solid fa-user" style={{ color: '#4663E6' }}></i>
          </div>
        </div>
      </nav>

      <main>
        <div className="caixa-de-compra">
          <h2>Compra concluída!</h2>
          <p id="aviso">Seu pedido foi processado com sucesso</p>
          <div className="icon">
            <img src={carrinho} alt="Ícone de Carrinho" id="carrinho" />
          </div>
          <p id="email">Um email de comprovação foi enviado para você</p>
          <p id="aviso">Pagamento efetuado às 20:20 em 10/08/2024</p>
          <a href="#" id="ver-produto">
            Visualizar produto/serviço comprado
          </a>
        </div>
        <aside>
          <div className="chat">
            <div id="cabecalho">
              <div id="foto-contato">
                <i style={{ color: '#08277a' }} className="fa-solid fa-user"></i>
              </div>
              <p id="nome-contato">Nome do Contato</p>
              <i className="fa-solid fa-list" id="mais"></i>
            </div>

            <div id="campo-mensagem">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                id="input"
              />
              <button id="enviar" className="fa-solid fa-arrow-right"></button>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Compra;
