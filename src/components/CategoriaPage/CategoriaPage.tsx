import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { livrosCategoria } from "../../Services/MainApi/livro.categoria.id";
import * as C from "./index.style";

interface Livro {
  _id: string;
  nome: string;
  foto: string;
  categoria: {
    nome: string;
  };
  autor: string;
  preco: string;
}

function CategoriaPage() {
  const { id } = useParams<{ id: string }>();
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    const getLivros = async () => {
      try {
        const response = await livrosCategoria(id || "");
        setLivros(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getLivros();
  }, [id]);

  return (
    <C.Container>
      <Card className="container container-lg, container-sm, container-sm">
        {livros.map((Livro) => (
          <div className="card ">
            <img src={Livro.foto} className="card-img-top d-flex" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{Livro.nome}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="index">Autor: </span>
                {Livro.autor}
              </li>
              <li className="list-group-item">
                <span className="index">Categoria: </span>
                {Livro.categoria.nome}
              </li>
              <li className="list-group-item"><span className="index">Preço: R$:</span> {Livro.preco}</li>
            </ul>
            <div className="card-body links">
              <a href="#" className="card-link">
                Ver Livro
              </a>
              <a href="#" className="card-link">
                Adicionar ao Carrinho
              </a>
            </div>
          </div>
        ))}
      </Card>
    </C.Container>
  );
}

export default CategoriaPage;
