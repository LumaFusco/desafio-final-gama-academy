import Formulario from '../../components/FormularioCadastroLivro/FormLivro'
import { Title } from "../../components/Title/title";


export const CadastroLivro = () => {
    return (
        <div>
            <Title titleText="Cadastrar Novo Livro" />
            <Formulario />
        </div>
    )
}