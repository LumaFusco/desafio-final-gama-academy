import { createContext, ReactNode, useState } from 'react'
import { api } from '../Services/MainApi/config/apiClient'
import { destroyCookie, setCookie, parseCookies } from 'nookies'

type AuthContextData = {
  user: UserProps | any
  isAuthenticated: boolean
  loginIn: (credentials: SignInProps) => Promise<void>
  loginOut: () => void
  signUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
  id: string
  nome: string
  email: string
}

type SignInProps = {
  email: string
  senha: string
}

type SignUpProps = {
  nome: string
  email: string
  senha: string
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function loginOut() {
  try {
    destroyCookie(undefined, '@tealbook.token')
  } catch {
    console.log('erro ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  async function loginIn({ email, senha }: SignInProps) {
    try {
      const response = await api.post('/login', {
        email,
        senha,
      })
      console.log(response.data)
      const { id, nome, token } = response.data
      setCookie(undefined, '@tealbook.token', token, {
        maxAge: 60 * 60, // Expirar em 1 hora
        path: '/', // Quais caminhos terão acesso ao cookie
      })

      setUser({
        id,
        nome,
        email,
      })

      // Passar para as proximas requisições o nosso token
      api.defaults.headers['Authorization'] = `Headers ${token}`

      // Redirecionar o user para ultimos pedidos
    } catch (error) {
      console.log('ERRO AO ACESSAR', error)
    }
  }

  async function signUp({ nome, email, senha }: SignUpProps) {
    try {
      const response = await api.post('/usuario', {
        nome,
        email,
        senha,
      })
      console.log("CADASTRADO COM SUCESSO!")
      
    } catch (err) {
      console.log('erro ao cadastrar', err)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loginIn, loginOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
