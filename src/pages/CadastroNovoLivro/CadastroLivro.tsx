import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import Formulario from '../../components/FormularioCadastro/FormLivro'
import { Title } from "../../components/Title/title";


export const CadastroLivro = () => {
    return(
        <div>
            <Header />
            <Title titleText="Cadastrar Novo Livro"/>
            <Formulario />
            <Footer />
        </div>
    )
}