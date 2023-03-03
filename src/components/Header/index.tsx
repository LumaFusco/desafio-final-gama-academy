import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Link as LinkRoute } from "react-router-dom";
import { Container } from "react-bootstrap";

import imageCart from "../../assets/images/icon-cart.svg";

import * as C from "./header.styles";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Routes from "../../Routes";

function Header() {
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
                <LinkRoute to="/Livros">Livros</LinkRoute>{" "}
              </Nav.Link>
              <Nav.Link href="#link">Categorias</Nav.Link>
              <div className="container-fluid">
                <form className="d-flex mx-1" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                  />
                  <button className="btn btn btn-secondary" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title="Login" id="basic-nav-dropdown" className="link2">
            <NavDropdown.Item href="">
              <LinkRoute to="/Login">Entrar</LinkRoute>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              {" "}
              <LinkRoute to="/atualizar-perfil">
                {" "}
                Configurações do Perfil
              </LinkRoute>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Últimos Pedidos
            </NavDropdown.Item>
          </NavDropdown>
          <div>
            <LinkRoute to="/carrinho">
              {" "}
              <img src={imageCart} alt="cart icon" className="p-3 icon-cart" />
            </LinkRoute>
          </div>
        </Container>
      </Navbar>
    </C.Container>
  );
}

export default Header;
