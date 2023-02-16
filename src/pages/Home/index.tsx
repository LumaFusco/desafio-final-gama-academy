import Header from "../../components/Header";
import {Title} from '../../components/Title/title' ;
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/FolderCarousel/Carousel'



function Home() {
  return (
    <div className="App">
      <Header/>
      <Title titleText="Este é o título" subTitle="Esse é o sub-título"/>
     <div>
      <Carousel />
     </div>
      <Footer />
    </div>

  );
}

export default Home;
