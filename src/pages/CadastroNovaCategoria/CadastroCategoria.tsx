import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import Formulario from '../../components/FormularioCadastroCategoria/FormCategoria'
import { Title } from "../../components/Title/title";


export const CadastroCategoria = () => {
    return(
        <div>
            <Header />
            <Title titleText="Cadastrar Nova Categoria"/>
            <Formulario />
            <Footer />
        </div>
    )
}