import { setupAPIClient } from "./config"

export function carrinhoDeCompras () {
    return setupAPIClient().get('/carrinho')
}