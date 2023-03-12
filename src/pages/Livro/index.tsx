import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import { Descricao } from '../../components/DescricaoLivro/descricaoLivro'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import imageBook from '../../assets/images/A Morte É Um Dia Que Vale A Pena Viver.jpg'
import * as C from './livro.style'
import Button from 'react-bootstrap/Button'
import { LivroID } from '../../Services/MainApi/livroPorID'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface LivroPID {
  _id: string;
  nome: string;
  foto: string;
  preco: string;
  descricao: string;
  autor: string;
};


export default function Livro() {
const {id} = useParams<{ id: string }>();
const [livro, setLivro] = useState<LivroPID>({
  _id: "",
  nome: "",
  foto: "",
  preco: "",
  descricao: "",
  autor: ""
});

useEffect(() => {
  const getLivro = async () => {
    try {
      const response = await LivroID(id || "");
      setLivro(response.data)
      console.log(response.data)
    } catch (error){
      console.error(error)
    }
  };
  getLivro()
}, [id])

  return (

      <div>
        <Header />
      
      <main>
        <Container>
          <Row>
            <Col>
              <C.Container>
                
                <div className="boxImagem">
                  <img
                    src={livro.foto}
                    alt="foto capa livro"
                    className="imageBook"
                  />
                </div>
              </C.Container>
            </Col>
            <Col>
              <Descricao
                bookTitle={livro.nome}
                bookDescription={livro.descricao}
                bookAuthor={livro.autor}
                bookPrice={livro.preco}
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
