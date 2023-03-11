import API_BASE from "./config";

export function livrosCategoria(id: string) {
  return API_BASE.get(`/livro/categoria/${id}`);
}