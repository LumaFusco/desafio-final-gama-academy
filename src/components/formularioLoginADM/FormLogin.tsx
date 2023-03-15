import {
  ReactNode,
  FormEvent,
  useContext,
  useState,
  ButtonHTMLAttributes,
} from 'react'
import { Link } from 'react-router-dom'
import { ButtonLogin } from '../ButtonLogin'
import * as C from '../../components/FormularioLogin/login.style'
import { data } from 'jquery'
import{toast} from 'react-toastify'
import { api } from '../../Services/MainApi/config/apiClient'
import { parseCookies, setCookie } from 'nookies'
import { navigate } from '@reach/router'


type SignInProps = {
  email: string
  senha: string
}

function LoginADM() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [loading, setLoading] = useState(false)
  async function loginInAdmin({ email, senha }: SignInProps) {
    try {
      const response = await api.post('/login/admin', {
        email,
        senha,
      })
      console.log(response.data)
      const { id, nome } = response.data
      setCookie(undefined, '@tealbook.token', response.data, {
        maxAge: 60 * 60, 
        path: '/', 
      })
  
      
      const cookie = parseCookies()
      // Passar para as proximas requisições o nosso token
      api.defaults.headers['Authorization'] = `Headers ${response.data}`
  
      toast.success('Logado com sucesso!')
      
      navigate('/painel-administrativo/admin');
      // Redirecionar o user para ultimos pedidos
    } catch (error) {
      toast.error('Erro ao acessar!')
      console.log('ERRO AO ACESSAR', error)
    }
  }
  
  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (email === '' || senha === '') {
      toast.error('PREENCHA TODOS OS CAMPOS!')
      return
    }

    setLoading(true)

    let data = {
      email,
      senha,
    }

    const response = await loginInAdmin(data)
    console.log (response)



    setLoading(false)
  }
 
  return (
    <C.Container>
      
      <div className="formLogin">
        <div className="headerLogin">
          <span>SOMENTE LOGIN ADM</span>
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

export default LoginADM
