import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
            <Col>
              <h2>Seu carrinho</h2>
              <h5>Confira os itens selecionados em seu carrinho de compras:</h5>
              <>
                {['sm', 'sm', 'sm'].map((breakpoint) => (
                  <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                    <div className="boxImagem">
                      <ListGroup.Item>
                        <img src={imageBook} alt="foto capa livro" className='imageBook' />
                      </ListGroup.Item>
                    </div>


                    <ListGroup.Item>
                      <div className="nomeLivro">
                        <Descricao
                          bookTitle="A Morte É Um Dia Que Vale A Pena" />
                      </div>
                    </ListGroup.Item>


                    <ListGroup.Item>
                      <Descricao bookPrice="R$69,90" />
                    </ListGroup.Item>


                    <ListGroup.Item>xxx unidades</ListGroup.Item>
                  </ListGroup>


                ))}
              </>
            </Col>
            <Col className='parte2'>
              <h5>Resumo do Pedido</h5>
              <InputGroup className="mb-5">
                <Form.Control
                  placeholder="Insira o código de desconto aqui"
                  aria-label="Código de Desconto"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
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
