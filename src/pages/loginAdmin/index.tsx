import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'

import LoginADM from '../../components/formularioLoginADM/FormLogin'

 function PageLoginAdmin() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <LoginADM />
      </section>
      <Footer />
    </div>
  )
}
export default PageLoginAdmin