import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as C from '../../components/FormularioLogin/login.style'

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <C.Container>
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FAÇA JÁ A SUA CONTA!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Nome:</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="nome"
                autoFocus
              />
              <Form.Label><strong>Endereço de Email:</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="nome@exemplo.com"
                autoFocus
              />
              <Form.Label><strong>Senha:</strong></Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='buttonClose' variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button className='buttonSave' variant="primary" onClick={handleClose}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
        </>    
        <div className="formLogin">
        <div className="headerLogin">
          <span>Faça seu login!</span>
        </div>
        <form action="">
          <div className="inputContainer">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email:"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha:"
            />
          </div>
          <div className="reset">
            <p>Esqueceu a senha?</p>
            <a href="#">Clique aqui!</a>
          </div>
          <button className="button">Entrar</button>

          <div className="footerForm">
            <p>Ainda não tem uma conta? </p>
            <a href="#" onClick={handleShow}>Clique aqui e cadastre-se!</a>
          </div>
        </form>
      </div>
    </C.Container>
  )
}

export default Login
