import * as C from './GerenPedidos.style'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link, Link as LinkRoute } from "react-router-dom";

export default function GerenPedidos() {
  return (
    <div>
      <main>
        <C.Container>
          <div className="titulo">
            <h1>Gerenciamento Pedidos</h1>
            <div>
              <Container className='button-nova-categoria'>
                <Row>
                  <Col></Col>
                  <Col xs={6}></Col>
                  <Col>
                  <Button variant="success"><LinkRoute to="/cadastro-pedido">Novo Pedido</LinkRoute></Button>{' '}
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <h6>Pedidos já cadastrados:</h6>
            </div>
          </div>
          <Table className="tabelaPedido" striped bordered hover>
            <thead>
              <tr>
                <th># Id Usuário</th>
                <th>Produto</th>
                <th>Valor Total</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td id-categoria='Id Usuário:'>852088019200841899825100982</td>
                <td nome-categoria='Produto:'>Livro xxxxx</td>
                <td nome-categoria='Valor Total:'>R$ 100,00</td>
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
