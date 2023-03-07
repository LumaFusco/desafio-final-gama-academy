import * as C from '../FormularioAtualizaSenha/atualizasenha.style'

function AtualizaSenha() {
  return (
    <C.Container>
      <div className="formLogin">
        <div className="headerLogin">
          <span>Atualização de Senha</span>
        </div>
        <form action="">


          <div className="inputContainer">
            <label htmlFor="senhaAtual">Digite sua senha atual:</label>
            <input
              type="senhaAtual"
              name="senhaAtual"
              id="senhaAtual"
              placeholder="senha atual"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="novaSenha">Digite sua nova senha:</label>
            <input
              type="novaSenha"
              name="novaSenha"
              id="novaSenha"
              placeholder="digite sua nova senha"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="ConfirmaNovaSenha">Confirme sua nova senha:</label>
            <input
              type="ConfirmaNovaSenha"
              name="ConfirmaNovaSenha"
              id="ConfirmaNovaSenha"
              placeholder="confirme sua nova senha"
            />
          </div>


          <div className="buttonconfirmar">
            <button className="button">Confirmar</button>
          </div>

        </form>
      </div>
    </C.Container>
  )
}

export default AtualizaSenha
