import API_BASE from "./config";

export function LivroID(id: string) {
  return API_BASE.get(`/livro/${id}`);
}