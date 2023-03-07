
import API_BASE from "./config";


interface livroPayload {
    nome: string;
    foto: string;
    preco: string;
    descricao: string;
    categoria: string;
    autor: string;
}


export function cadastroLivro (payload: livroPayload) {
    return API_BASE.post('/livro', payload)
}