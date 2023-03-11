import { setupAPIClient } from "./config"


export function listarLivros () {
    return setupAPIClient().get('/livro')
}