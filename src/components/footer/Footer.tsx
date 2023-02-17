import * as C from './Footer.styles';
import{Link, Link as LinkRoute} from 'react-router-dom'
function Footer () {
    return(
        <C.Container>
            <div>
            <LinkRoute to='/'>Teal Book</LinkRoute>
            </div>
            <div>
                <span>Projeto desenvolvido por: </span>
                <a href='https://www.linkedin.com/in/lumafusco/' target='_blank'>Luma Fusco</a>
                <a href='https://www.linkedin.com/in/christhofer-vieira-816124246' target='_blank'>Christhofer Vieira</a>
                <a href='http://linkedin.com/in/caíque-gama-de-oliveira-55b83a173' target='_blank'>Caique Gama</a>
                <a href='https://www.linkedin.com/in/calebe-venancio-a971b4231/' target='_blank'>Calebe Venancio</a>
                <a href='https://www.linkedin.com/in/rudson-santana/' target='_blank'>Rudson Santana</a>
            </div>
        </C.Container>
    );
}
export default Footer;