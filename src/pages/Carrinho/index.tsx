import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import * as C from './carrinho.style';
import imageBook from '../../assets/images/A Morte É Um Dia Que Vale A Pena Viver.jpg';
import { Descricao } from '../../components/DescricaoLivro/descricaoLivro';


export default function Carrinho() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <C.Container>
          <Row>

            <Col sm={7}>
              <h2>Meu Carrinho</h2>
              <h6>Confira os itens selecionados em seu carrinho de compras:</h6>

              <>
                {['sm', 'sm', 'sm'].map((breakpoint) => (
                  <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2 mt-3">
                   
                      <ListGroup.Item>
                        <img src={imageBook} alt="foto capa livro" className='imageBook' />
                      </ListGroup.Item>
                   

                    <ListGroup.Item>
                      <div className="nomeLivro">
                        <Descricao
                          bookTitle="A Morte É Um Dia Que Vale A Pena" />
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Descricao bookPrice="R$69,90" />
                    </ListGroup.Item>


                    <ListGroup.Item><Button variant="light">Excluir</Button>{' '}</ListGroup.Item>
                  
                  </ListGroup>
                ))}
              </>

              <h6 className='mt-5'> Política de Troca </h6>
              <p>
              O Código de Defesa do Consumidor define que trocas e devoluções podem ser realizadas em até 7 dias em caso de arrependimento. Após esse período, são gratuitas pelo prazo de 30 dias após a data do seu pedido.
              </p>

            </Col>


            <Col sm={5} className="resumo-pedido">
              <h5>Resumo do Pedido</h5>

              <InputGroup className="mb-4" >
                <Form.Control
                  placeholder="Insira o código de desconto aqui"
                  aria-label="Código de Desconto"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>


              <Row>
                <Col xs={12} md={8}>
                  Subtotal
                </Col>
                <Col xs={6} md={4}>
                  R$ xxx
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={8}>
                  Envio
                </Col>
                <Col xs={6} md={4}>
                  R$ xxx
                </Col>
              </Row>

              <div className="total">
                <Row>
                  <Col xs={12} md={8}>
                    Total
                  </Col>
                  <Col xs={6} md={4}>
                    R$ xxx
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </C.Container>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>

  );
};
