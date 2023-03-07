import API_BASE from "./config";


export function listarCategorias () {
    return API_BASE.get('/categoria')
}