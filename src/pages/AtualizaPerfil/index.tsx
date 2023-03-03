import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import * as C from './index.style'

export const AttProfile = () => {
    return (
        <div >
            <Header />
                <C.Container className='container-lg, container-sm, container-sm'>
                    <form>
                        <div className="areaForm">
                            ...
                        </div>
                    </form>
                </C.Container>
            <Footer />
        
        </div>
    )
}