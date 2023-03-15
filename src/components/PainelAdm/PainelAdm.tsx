import * as C from './paineladm.style'
import { Link, Link as LinkRoute } from "react-router-dom";

function PainelAdm() {
  return (
    <C.Container>
      <div className="formLogin">
        <div className="headerLogin">
          <span>O que você deseja gerenciar?</span>
        </div>
        <form action="">


          <div className="buttonconfirmar">
            <button className="button"><LinkRoute to="/gerenciamento-livros">Produtos</LinkRoute></button>
          </div>
          <div className="buttonconfirmar">
          <button className="button2"><LinkRoute to="/gerenciamento-categoria">Categorias</LinkRoute></button>
          </div>
          <div className="buttonconfirmar">
          <button className="button"><LinkRoute to="/gerenciamento-cliente">Clientes</LinkRoute></button>
          </div>
          <div className="buttonconfirmar">
          <button className="button2"><LinkRoute to="/gerenciamento-pedidos">Pedidos</LinkRoute></button>
          </div>
          

          <div className="reset">
          <LinkRoute to="/">Voltar para página inicial</LinkRoute>
          </div>


        </form>
      </div>
    </C.Container>
  )
}

export default PainelAdm
