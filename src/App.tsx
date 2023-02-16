import Header from "./components/Header";
import {Title} from './components/Title/title' ;
import Footer from './components/footer/Footer';
import Carousel from './components/FolderCarousel/Carousel'



function App() {
  return (
    <div className="App">
      <Header/>
      <Title titleText="Este é o título" subTitle="Esse é o sub-título"/>
      <Carousel/>
      <Footer/>
     
    </div>

  );
}

export default App;