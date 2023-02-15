import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import imageCart from '../images/icon-cart.svg';
import logoTealBook from '../images/logo_teal_book.jpg';
import * as C from './header.styles';


function Header() {
    return (
        <C.Container>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="d-flex">
                        <a href="#">
                            <img className="logo-teal-book" src={logoTealBook} alt="logo teal book" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link darker" aria-current="page" href="#">Livros</a>
                            </li>
                            <li className="nav-item darker">
                                <a className="nav-link" href="#">Categorias</a>
                            </li>
                            <li>
                                <div className="container-fluid">
                                    <form className="d-flex mx-1" role="search">
                                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                                        <button className="btn btn btn-secondary" type="submit">Buscar</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link darker" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item darker">
                                <a className="nav-link" href="#">Perfil</a>
                            </li>
                            <li className="nav-item darker">
                                <a className="nav-link" href="#">Meus Pedidos</a>
                            </li>
                            <img src={imageCart} alt="cart icon" className="p-3" />
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
        </C.Container>
    )
}

export default Header;