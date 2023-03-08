import * as C from './paineladm.style'


function PainelAdm() {
  return (
    <C.Container>
      <div className="formLogin">
        <div className="headerLogin">
          <span>O que você deseja gerenciar?</span>
        </div>
        <form action="">


          <div className="buttonconfirmar">
            <button className="button">Produtos</button>
          </div>
          <div className="buttonconfirmar">
            <button className="button2">Categorias</button>
          </div>
          <div className="buttonconfirmar">
            <button className="button">Clientes</button>
          </div>
          <div className="buttonconfirmar">
            <button className="button2">Pedidos</button>
          </div>
          

          <div className="reset">
            <a href="#">Voltar para página inicial</a>
          </div>


        </form>
      </div>
    </C.Container>
  )
}

export default PainelAdm
