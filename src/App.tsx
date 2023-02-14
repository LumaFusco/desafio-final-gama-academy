import Header from "./components/Header/index";
import {Title} from './components/Title/title';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Title titleText={"Aqui vamos inserir o título"} subTitle={'Aqui vamos inserir o subtitle (esse campo é opcional)'} />
      <Footer />
    </div>

  );
}

export default App;
