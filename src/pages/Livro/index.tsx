import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import { Descricao } from '../../components/DescricaoLivro/descricaoLivro'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import imageBook from '../../assets/images/A Morte É Um Dia Que Vale A Pena Viver.jpg'
import * as C from './livro.style'
import Button from 'react-bootstrap/Button'

export default function Livro() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <C.Container>
                <div className="boxImagem">
                  <img
                    src={imageBook}
                    alt="foto capa livro"
                    className="imageBook"
                  />
                </div>
              </C.Container>
            </Col>
            <Col>
              <Descricao
                bookTitle="A Morte É Um Dia Que Vale A Pena"
                bookDescription="Sobre a arte de ganhar existem muitas lições, mas e sobre a arte de perder? Ninguém quer falar a respeito disso, mas a verdade é que passamos muito tempo da vida em grande sofrimento quando perdemos bens, pessoas, realidades, sonhos. Saber perder é a arte de quem conseguiu viver plenamente o que ganhou um dia."
                bookAuthor="Arantes, Ana Claudia Quintana"
                bookPrice="R$69,90"
              />
              <div className="d-grid gap-3">
                <Button variant="secondary" size="sm">
                  ADICIONAR AO CARRINHO
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
