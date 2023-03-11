import { Link, Link as LinkRoute } from "react-router-dom";
import ButtonSelect from "../../components/Button";
import CategoriaPage from "../../components/CategoriaPage/CategoriaPage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header";
import * as C from "./index.style";

function LivrosCategoria() {
  return (
    <div>
      <Header />
      <C.Container>
        <div className="context">
          <ButtonSelect />
          <LinkRoute to="/Livros">
            <button className="botaoVoltar">Voltar a Todos os Livros</button>
          </LinkRoute>
          <CategoriaPage />
        </div>
      </C.Container>
      <Footer />
    </div>
  );
}

export default LivrosCategoria;
