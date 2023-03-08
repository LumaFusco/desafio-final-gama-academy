import API_BASE from "./config";


export function livrosCategoria () {
    return API_BASE.get('/livro/categoria/:id')
}