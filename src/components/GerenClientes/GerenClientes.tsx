import * as C from './GerenClientes.style'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link, Link as LinkRoute } from "react-router-dom";

export default function GerenClientes() {
  return (
    <div>
      <main>
        <C.Container>
          <div className="titulo">
            <h1>Gerenciamento Clientes</h1>
            <div>
            <Container className='button-nova-categoria'>
              <Row>
                <Col></Col>
                <Col xs={6}></Col>
                <Col>
                <Button variant="success"><LinkRoute to="/cadastro-cliente">Novo Cliente</LinkRoute></Button>{' '}
                </Col>
              </Row>
            </Container>
            </div>
            <div>
            <h6>Clientes já cadastrados:</h6>
            </div>
          </div>
          <Table className="tabelaPedido" striped bordered hover>
            <thead>
              <tr>
                <th># Id Cliente</th>
                <th>Nome do Cliente</th>
                <th>E-mail</th>
                <th>Senha</th>
                <th>isAdmin</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td id-categoria='Id Cliente:'>852088019200841899825100982</td>
                <td nome-categoria='Nome Cliente:'>Luma Fusco</td>
                <td nome-categoria='Email:'>lumafusco@gmail.com</td>
                <td nome-categoria='Senha:'>xxxxxxxxx</td>
                <td nome-categoria='isAdmin:'>false</td>
                <td nome-categoria='Ação:'>

                  <ButtonGroup aria-label="Basic example">
                    <Button className="buttonAcao" variant="secondary">Editar</Button>
                    <Button className="buttonAcao" variant="secondary">Deletar</Button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>
          <LinkRoute to="/painel-administrativo">Voltar para o painel administrativo</LinkRoute>
          </div>
        </C.Container>
      </main>
    </div>
  )
}
