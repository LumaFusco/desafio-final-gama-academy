import { setupAPIClient } from "./config"


export function listarCategorias () {
    return setupAPIClient().get('/categoria')
}