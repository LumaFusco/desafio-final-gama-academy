import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Carrinho from './pages/Carrinho'
import Livro from './pages/Livro'
import Livros from './pages/Livros'
import Pedidos from './pages/Pedidos'
import Sucesso from './pages/Sucesso'
import { CadastroLivro } from './pages/CadastroNovoLivro/CadastroLivro'
import AttProfile from './pages/AtualizaPerfil/index'
import AttSenha from './pages/AtualizaSenha'
import PainelAdministrativo from './pages/PainelAdministrativo'
import GerenCategorias from './components/GerenCategorias/GerenCategorias'
import GerenClientes from './components/GerenClientes/GerenClientes'
import { CadastroCategoria } from './pages/CadastroNovaCategoria/CadastroCategoria'
import { CadastroCliente } from './pages/CadastroNovoCliente/CadastroCliente'




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
        <Route path="/cadastro-categoria" element={<CadastroCategoria />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/gerenciamento-categoria" element={<GerenCategorias />} />
        <Route path="/gerenciamento-cliente" element={<GerenClientes />} />
        <Route path="/atualizar-perfil" element={<AttProfile />} />
        <Route path="/atualizar-senha" element={<AttSenha />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/painel-administrativo" element={<PainelAdministrativo />} />
      </WrapperRoutes>
    </BrowserRouter>
  )
}


