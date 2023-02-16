import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import imageCart from '../images/icon-cart.svg';
import menuIcon from '../images/icon-menu.svg';
import logoTealBook from '../images/logo_teal_book.jpg';
import * as $ from 'jquery';
import * as C from './header.styles';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  return (
    <C.Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo-loja">Teal Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Livros</Nav.Link>
              <Nav.Link href="#link">Categorias</Nav.Link>
              <div className="container-fluid">
                <form className="d-flex mx-1" role="search">
                  <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                  <button className="btn btn btn-secondary" type="submit">Buscar</button>
                </form>
              </div>
            </Nav>
          </Navbar.Collapse>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Entrar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Configurações do Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Últimos Pedidos
                </NavDropdown.Item>
              </NavDropdown>
          <div>
            <img src={imageCart} alt="cart icon" className="p-3" />
          </div>
        </Container>
      </Navbar>
    </C.Container >
  )
}

export default Header;