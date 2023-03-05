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
                <th># Pedido Nº</th>
                <th>Data da Compra</th>
                <th>Título</th>
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
                <td data-title='#Pedido Nº:'>1</td>
                <td data-title='Data da Compra:'>27/02/2023</td>
                <td data-title='Título:'>A Morte É Um Dia Que Vale A Pena Viver</td>
                <td data-title='Status:'>Em andamento</td>
                <td data-title='Quantidade:'>
                  <input type="number" id="quantidade" value="1" disabled />
                </td>
                <td data-title='Preço Unitário:'>R$ 19,80</td>
                <td data-title='Total:'>R$ 19,80</td>
              </tr>
            </tbody>
          </Table>
        </C.Container>
      </main>
    </div>
  )
}
