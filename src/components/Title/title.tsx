import * as C from './title.styles';
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
    titleText: string;
    subTitle?: string;
}

export const Title = (props: Props) => {
    return(
    <C.Container >
      <h1>{props.titleText}</h1>
      <h4>{props.subTitle}</h4>
    </C.Container>
    
    );
}