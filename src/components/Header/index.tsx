import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Link as LinkRoute } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useContext } from 'react'

import imageCart from '../../assets/images/icon-cart.svg'

import * as C from './header.styles'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import * as Routes from '../../Routes'
import { FiLogOut } from 'react-icons/fi'
import {AuthContext} from '../../contexts/AuthContext'

function Header() {

  const {loginOut} = useContext(AuthContext)

  return (
    <C.Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo-loja">
            <LinkRoute to="/">Teal Book</LinkRoute>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="link2">
                <LinkRoute to="/Livros">Nossos Livros</LinkRoute>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title="Login" id="basic-nav-dropdown" className="link2">
            <NavDropdown.Item href="">
              <LinkRoute to="/Login">Entrar</LinkRoute>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              {' '}
              <LinkRoute to="/atualizar-perfil">
                {' '}
                Configurações do Perfil
              </LinkRoute>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">
              <LinkRoute to="/pedidos"> Últimos Pedidos</LinkRoute>
            </NavDropdown.Item>
          </NavDropdown>
          <div>
            <LinkRoute to="/carrinho">
              {' '}
              <img src={imageCart} alt="cart icon" className="p-3 icon-cart" />
            </LinkRoute>
          </div>
          <button onClick={loginOut}>
            <FiLogOut color="#000" size={24} />
          </button>
        </Container>
      </Navbar>
    </C.Container>
  )
}

export default Header
