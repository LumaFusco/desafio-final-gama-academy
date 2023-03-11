import {
  ReactNode,
  FormEvent,
  useContext,
  useState,
  ButtonHTMLAttributes,
} from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { ButtonLogin } from '../ButtonLogin'
import * as C from './cadastro.styles'
import { toast } from 'react-toastify'


function SignUp() {
  const { signUp } = useContext(AuthContext)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    if (nome === ' ' || email === '' || senha === '') {
      toast.error('PRENCHA TODOS OS CAMPOS!')
      return
    }
    setLoading(true)

    let data = {
      nome,
      email,
      senha,
    }
    await signUp(data)

    setLoading(false);
  }

  return (
    <C.Container>
      <div className="formLogin">
        <div className="headerLogin">
          <span>FAÇA SEU CADASTRO!</span>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="inputContainer">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome:"
            />
          </div>
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
        </form>
      </div>
    </C.Container>
  )
}
export default SignUp