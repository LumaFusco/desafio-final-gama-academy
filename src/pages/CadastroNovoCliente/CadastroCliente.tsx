import Formulario from '../../components/FormularioCadastroCliente/FormCliente'
import { Title } from "../../components/Title/title";


export const CadastroCliente = () => {
    return (
        <div>
            <Title titleText="Cadastrar Novo Cliente" />
            <Formulario />
        </div>
    )
}