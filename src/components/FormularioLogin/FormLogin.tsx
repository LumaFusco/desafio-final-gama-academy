import * as C from '../../components/FormularioLogin/login.style'

function Login() {
  return (
    <C.Container>
      <div className="formLogin">
        <div className="headerLogin">
          <span>Faça seu login!</span>
        </div>
        <form action="">
          <div className="inputContainer">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email:"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha:"
            />
          </div>
          <div className="reset">
            <p>Esqueceu a senha?</p>
            <a href="#">Clique aqui!</a>
          </div>
          <button className="button">Entrar</button>

          <div className="footerForm">
            <p>Ainda não tem uma conta? </p>
            <a href="#">Clique aqui e cadastre-se!</a>
          </div>
        </form>
      </div>
    </C.Container>
  )
}

export default Login
