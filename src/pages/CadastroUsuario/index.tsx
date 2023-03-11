import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import SignUp from '../../components/CadastroUsuario/IndexUser'

 function PageCadastroUsuario() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <SignUp />
      </section>
      <Footer />
    </div>
  )
}
export default PageCadastroUsuario