import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import Login from '../../components/FormularioLogin/FormLogin'

 function PageLogin() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Login />
      </section>
      <Footer />
    </div>
  )
}
export default PageLogin