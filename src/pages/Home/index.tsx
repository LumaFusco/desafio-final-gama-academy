import Header from "../../components/Header";
import {Title} from '../../components/Title/title' ;
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/FolderCarousel/Carousel'
import "./style.css";


function Home() {
  return (
    <body>
      <Header/>
      <Title titleText="Este é o título2" subTitle="Esse é o sub-título"/>
      <Carousel />   
      <Footer />
    </body>

  );
}

export default Home;
