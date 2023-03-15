import * as C from './GerenLivros.style'
import Table from 'react-bootstrap/Table'
import imageBook from '../../assets/images/A Morte É Um Dia Que Vale A Pena Viver.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link, Link as LinkRoute } from "react-router-dom";

export default function GerenLivros() {
  return (
    <div>
      <main>
        <C.Container>
          <div className="titulo">
            <h1>Gerenciamento Livros</h1>
            <div>
              <Container className='button-nova-categoria'>
                <Row>
                  <Col></Col>
                  <Col xs={6}></Col>
                  <Col>
                    <Button variant="success"><LinkRoute to="/cadastro-livro">Novo Livro</LinkRoute></Button>{' '}
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <h6>Livros já cadastrados:</h6>
            </div>
          </div>
          <Table className="tabelaPedido" striped bordered hover>
            <thead>
              <tr>
                <th># Id Livro</th>
                <th>Nome</th>
                <th>Foto</th>
                <th>Preço</th>
                <th>Descrição</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td id-categoria='Id Livro:'>85208841899825100982</td>
                <td nome-categoria='Nome:'>Mindset A Nova Psicologia Do Sucesso
                </td>
                <td nome-categoria='Foto:'>Livro xxxxx</td>
                <td nome-categoria='Preço:'>R$ 51,90</td>
                <td nome-categoria='Descrição:'>Carol S. Dweck, professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama de "mindset", é crucial para o sucesso. Dweck revela de forma brilhante como o sucesso pode ser alcançado pela maneira como lidamos com nossos objetivos. O mindset não é um mero traço de personalidade, é a explicação de por que somos otimistas ou pessimistas, bem-sucedidos ou não. Ele define nossa relação com o trabalho e com as pessoas e a maneira como educamos nossos filhos. É um fator decisivo para que todo o nosso potencial seja explorado.
                </td>
                <td nome-categoria='Autor:'>Dweck, Carol S.
                </td>

                <div className="areaFormRadio">
                  <div>
                    <label className="radio">
                      <input
                        type="radio"
                        name="categoria"
                        value="romance"

                      />
                      <p>Romance</p>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="categoria"
                        value="psicologia"
                      />
                      <p>Psicologia</p>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="categoria"
                        value="suspense"
                      />
                      <p>Suspense</p>
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="categoria"
                        value="biografias"

                      />
                      <p>Biografias e Memórias</p>
                    </label>
                  </div>
                </div>



















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
