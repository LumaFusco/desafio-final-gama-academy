import API_BASE from "./config";


export function listarLivros () {
    return API_BASE.get('/livro')
}