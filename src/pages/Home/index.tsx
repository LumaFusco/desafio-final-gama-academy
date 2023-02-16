import Header from "../../components/Header";
import {Title} from '../../components/Title/title' ;
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/FolderCarousel/Carousel'



function Home() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header><main>
      <Title titleText="Este é o título2" subTitle="Esse é o sub-título"/>
    
      <Carousel />
      </main>
     <footer>
      <Footer />
      </footer>
    </div>

  );
}

export default Home;
