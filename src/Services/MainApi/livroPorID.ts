import { setupAPIClient } from "./config"

export function LivroID(id: string) {
  return setupAPIClient().get(`/livro/${id}`);
}