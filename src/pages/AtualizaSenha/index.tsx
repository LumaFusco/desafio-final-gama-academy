import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import AtualizaSenha from '../../components/FormularioAtualizaSenha/AtualizaSenha'

 function AttSenha() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <AtualizaSenha />
      </section>
      <Footer />
    </div>
  )
}
export default AttSenha