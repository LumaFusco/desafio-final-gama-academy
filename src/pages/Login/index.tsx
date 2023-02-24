import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import ImageLogo from '../../assets/images/logo_teal_book.jpg'
import * as C from './login.style'

export default function Login() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <C.Container>
        <div className="formLogin">
          <div className="headerLogin">
            <img src={ImageLogo} alt="Image Logo" />
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

            <a href="#">Esqueci a senha</a>
            <button className="button">
              Entrar 
            </button>

            <div className="footerForm">
              <p>Ainda não tem uma conta? </p>
              <a href="#">Clique aqui e cadastre-se!</a>
            </div>
          </form>
        </div>
      </C.Container>
      <Footer />
    </div>
  )
}
