import { useEffect, useState } from 'react';
import { listarCategorias } from '../../Services/MainApi/categorias';
import * as C from './button.style';
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';
import { livrosCategoria } from '../../Services/MainApi/livro.categoria.id';


interface Categoria {
    _id: string;
    nome: string;
}



function ButtonSelect(){
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [selectedValue, setSelectedValue] = useState("");
   

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
        navigate(`/Livros/categoria/${selectedValue}`)
    }
    console.log(categoria)
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
      };
    
    return (
        <C.Container>
           
            <form action="" method="GET" >
                
                <select name="categoria" className='MySelect' onChange={handleChange}>
                <option>Selecione a categoria</option>
                {categoria.map((Categoria) => (
                    <>
                  <option className='opt' value={Categoria._id}>{Categoria.nome}</option></>
                    ))}

                </select>
                <input type='submit' value='Buscar' onClick={handleSubmit}/>
             
            </form>
     
        </C.Container>
    )
        
};

export default ButtonSelect;