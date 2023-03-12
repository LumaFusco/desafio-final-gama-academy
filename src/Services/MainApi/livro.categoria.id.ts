import { setupAPIClient } from "./config"

export function livrosCategoria(id: string) {
  return setupAPIClient().get(`/livro/categoria/${id}`);
}