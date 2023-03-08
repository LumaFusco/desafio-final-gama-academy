import * as C from './GerenCategorias.style'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function GerenCategorias() {
  return (
    <div>
      <main>
        <C.Container>
          <div className="titulo">
            <h1>Gerenciamento Categorias</h1>
            <div>
            <Container className='button-nova-categoria'>
              <Row>
                <Col></Col>
                <Col xs={6}></Col>
                <Col>
                  <Button variant="success">Nova Categoria</Button>{' '}
                </Col>
              </Row>
            </Container>
            </div>
            <div>
            <h6>Categorias já cadastradas:</h6>
            </div>
          </div>
          <Table className="tabelaPedido" striped bordered hover>
            <thead>
              <tr>
                <th># Id Categoria</th>
                <th>Nome da Categoria</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td id-categoria='Id Categoria:'>8520880192008418902.6209809825100982</td>
                <td nome-categoria='Nome Categoria:'>Romance</td>
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
            <a  className="reset" href="#">Voltar para o painel administrativo</a>
          </div>
        </C.Container>
      </main>
    </div>
  )
}
