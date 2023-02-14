import "./App.css";
import Carousel from "./components/FolderCarousel/Carousel"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Pagina Home</h1>
    <div>
      <Carousel/>
    </div>
    </div>
  );
}

export default App;
