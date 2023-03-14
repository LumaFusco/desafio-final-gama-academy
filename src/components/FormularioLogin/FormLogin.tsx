import {
  FormEvent,
  useContext,
  useState,
 
} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ButtonLogin } from '../ButtonLogin'
import * as C from '../../components/FormularioLogin/login.style'
import{toast} from 'react-toastify'

function Login() {
  const { loginIn } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(false)

  
  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    
   
        if(email === '' || senha === '') {
          toast.error('PREENCHA TODOS OS CAMPOS!')
          return
        }

    setLoading(true)

    let data = {
      email,
      senha,
    }

    await loginIn(data)

    setLoading(false)

    }
    
  

  return (
    <C.Container>
      
      <div className="formLogin">
        <div className="headerLogin">
          <span>FAÇA SEU LOGIN!</span>
        </div>
        <form onSubmit={handleLogin}>
          <div className="inputContainer">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email:"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="senha"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha:"
            />
          </div>
          <ButtonLogin type="submit" loading={loading}>
            Entrar
          </ButtonLogin>

          <div className="footerForm">
            <p>AINDA NÃO TEM UMA CONTA? </p>
            <Link to="/cadastro-usuario">CLIQUE AQUI E CADASTRE-SE</Link>
          </div>
        </form>
      </div>
    </C.Container>
  )
}

export default Login
