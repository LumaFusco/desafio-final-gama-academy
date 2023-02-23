import 'bootstrap/dist/css/bootstrap.min.css'
import * as C from './livro.style';

type Props = {
    bookTitle?: string;
    bookDescription?: string;
    bookAuthor?: string;
    bookPrice?: string;
  }

export const Descricao = (props: Props) => {
    return(
   <div>
    <C.Container>
      <h1>{props.bookTitle}</h1>
      <h5>{props.bookPrice}</h5>
      <h3>{props.bookDescription}</h3>
      <h4>{props.bookAuthor}</h4>
            </C.Container>
      </div>
    
    );
}