import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import Formulario from '../../components/FormularioCadastroCliente/FormCliente'
import { Title } from "../../components/Title/title";


export const CadastroCliente = () => {
    return(
        <div>
            <Header />
            <Title titleText="Cadastrar Novo Cliente"/>
            <Formulario />
            <Footer />
        </div>
    )
}