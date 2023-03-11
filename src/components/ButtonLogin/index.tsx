import { ReactNode, ButtonHTMLAttributes } from 'react'
import * as C from './styles'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,
}

export function ButtonLogin({ loading, children, ...rest }: ButtonProps) {
  return (
    <C.Container>
      <button className="buttonLogin"disabled={loading} {...rest}>
        {loading ? <FaSpinner color="#fff" size={16} /> :( <a> {children} </a>)}
      </button>
    </C.Container>
  )
}
