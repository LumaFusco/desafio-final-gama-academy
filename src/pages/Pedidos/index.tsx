import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import PedidosPage from '../../components/Pedidos/PedidosPage'

function Pedidos() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <PedidosPage/>
      </section>
      <Footer />
    </div>
  )
}

export default Pedidos