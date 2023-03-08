import Formulario from '../../components/FormularioCadastroPedido/FormPedido'
import { Title } from "../../components/Title/title";


export const CadastroPedido = () => {
    return (
        <div>
            <Title titleText="Cadastrar Novo Pedido" />
            <Formulario />
        </div>
    )
}