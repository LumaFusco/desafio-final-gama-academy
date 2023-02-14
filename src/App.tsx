import Header from "./components/Header";
import {Title} from './components/Title/title' ;
import Footer from './components/footer/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <Title titleText="Este é o título" subTitle="Esse é o sub-título"/>
      <Footer />
    </div>

  );
}

export default App;
