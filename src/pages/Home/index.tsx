import Header from "../../components/Header";
import {Title} from '../../components/Title/title' ;
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/FolderCarousel/Carousel'
import "./style.css";


function Home() {
  return (
    <body>
      <Header/>
      <Title titleText="A leitura está a apenas um clique de distância." subTitle="Navegue por nossas categorias e conheça a livraria considera pelo segundo ano consectivo a maior livraria online do Brasil!"/>
      <Carousel />   
      <Footer />
    </body>

  );
}

export default Home;
