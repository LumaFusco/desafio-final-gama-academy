import * as C from './button.style'


function ButtonSelect(){
    
    return (
        <C.Container>
            <form action="" method="GET">
                <select name="categoria" className='MySelect'>
                    <option selected className='opt'>Todos os Livros</option>
                    <option className='opt'>Romance</option>
                    <option className='opt'>Suspense</option>
                    <option className='opt'>Biografia e Memórias</option>
                    <option className='opt'>Psicologia</option>
                </select>
                <input type='submit' value='Buscar'/>
            </form>
        </C.Container>
    )
        
};

export default ButtonSelect;