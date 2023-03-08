import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import PainelAdm from '../../components/PainelAdm/PainelAdm'

 function PainelAdministrativo() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <PainelAdm />
      </section>
      <Footer />
    </div>
  )
}
export default PainelAdministrativo
