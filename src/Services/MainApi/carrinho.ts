import API_BASE from "./config";

export function carrinhoDeCompras () {
    return API_BASE.get('/carrinho')
}