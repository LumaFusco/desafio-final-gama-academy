import Header from '../../components/Header';
import Footer from '../../components/footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import imageBook from '../../assets/images/A Morte É Um Dia Que Vale A Pena Viver.jpg';
import { Descricao } from '../../components/DescricaoLivro/descricaoLivro';

import * as C from './sucesso.style';


export default function Sucesso() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>

        <C.Container>
          <Row>

            <Col sm={7}>
              <h2>Seu pedido foi realizado com sucesso!</h2>
              <h6>Resumo do Pedido:</h6>

              <>
                {['sm', 'sm'].map((breakpoint) => (
                  <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2 mt-3">


                    <ListGroup.Item>
                      <div className="nomeLivro">
                        <Descricao
                          bookTitle="A Morte É Um Dia Que Vale A Pena" />
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Descricao bookPrice="R$69,90" />
                    </ListGroup.Item>

                  </ListGroup>
                ))}
              </>
              <Col sm={6} className="resumo-pedido">
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
                      Total da Compra:
                    </Col>
                    <Col xs={6} md={4}>
                      R$ xxx
                    </Col>
                  </Row>
                </div>
              </Col>
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


