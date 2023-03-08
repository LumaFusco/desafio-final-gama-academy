import { useEffect, useState } from 'react';
import { listarCategorias } from '../../Services/MainApi/categorias';
import * as C from './button.style';
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';

interface Categoria {
    _id: string;
    nome: string;
}


function ButtonSelect(){
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria[]>([]);

   

    useEffect(() => {
        const getDados = async () => {
            try{
                const response = await listarCategorias();
                setCategoria(response.data)
            } catch (error) {
                alert("error")
            }
        }
        getDados();
    },[])
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        navigate(`/Livros/categoria/${categoria}`)
    }
    console.log(categoria)
    
    return (
        <C.Container>
           
            <form action="" method="GET" >
                <select name="categoria" className='MySelect'>
                {categoria.map((Categoria) => (
                  <option className='opt' value={Categoria._id}>{Categoria.nome}</option>
                    ))}

                </select>
                <input type='submit' value='Buscar' onClick={handleSubmit}/>
             
            </form>
     
        </C.Container>
    )
        
};

export default ButtonSelect;