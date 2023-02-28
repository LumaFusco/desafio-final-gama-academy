import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Carrinho from './pages/Carrinho'
import Livro from './pages/Livro'
import Livros from './pages/Livros'
import Sucesso from './pages/Sucesso'
import { CadastroLivro } from './pages/CadastroNovoLivro/CadastroLivro'



export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/livro" element={<Livro />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroLivro />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </WrapperRoutes>
    </BrowserRouter>
  )
}