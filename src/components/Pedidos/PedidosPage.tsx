import * as C from './pedidos.style'
import Table from 'react-bootstrap/Table'
import imageBook from '../../assets/images/A Morte É Um Dia Que Vale A Pena Viver.jpg'

export default function Pedidos() {
  return (
    <div>
      <main>
        <C.Container>
          <div className="titulo">
            <h1>Meus Pedidos</h1>
            <h6>Confira seus pedidos já finalizados:</h6>
          </div>
          <Table className="tabelaPedido" striped bordered hover>
            <thead>
              <tr>
                <td></td>
                <th># Número do Pedido</th>
                <th>Data da Compra</th>
                <th>Nome do Produto</th>
                <th>Status</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="imageBook" src={imageBook} alt="" />
                </td>
                <td>1</td>
                <td>27/02/2023</td>
                <td>A Morte É Um Dia Que Vale A Pena Viver</td>
                <td>Em andamento</td>
                <td>
                  <input type="number" id="quantidade" value="1" disabled />
                </td>
                <td>R$ 19,80</td>
                <td>R$ 19,80</td>
              </tr>
            </tbody>
          </Table>
        </C.Container>
      </main>
    </div>
  )
}
