import * as C from '../FormularioAtualizaPerfil/atualizaperfil.style'

function AtualizaPerfil() {
  return (
    <C.Container>
      <div className="formLogin">
        <div className="headerLogin">
          <span>Preencha abaixo os dados que deseja atualizar</span>
        </div>
        <form action="">


          <div className="inputContainer">
            <label htmlFor="novoNome">Alterar Nome:</label>
            <input
              type="novoNome"
              name="novoNome"
              id="novoNome"
              placeholder="digite o novo nome"
            />
          </div>


          <div className="inputContainer">
            <label htmlFor="novoemail">Alterar E-mail:</label>
            <input
              type="novoemail"
              name="novoemail"
              id="novoemail"
              placeholder="digite o novo email"
            />
          </div>

          <div className="buttonconfirmar">
            <button className="button">Confirmar</button>
          </div>

          <div className="reset">
            <p>Deseja alterar sua senha?</p>
            <a href="#">Clique aqui!</a>
          </div>


        </form>
      </div>
    </C.Container>
  )
}

export default AtualizaPerfil
