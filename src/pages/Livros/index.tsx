import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import * as C from "./index.style";
import Button from "../../components/Button/";
import React, { useEffect, useState } from "react";
import { listarLivros } from "../../Services/MainApi/livros";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";




interface Livro {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  autor: string;
};

export default function Livros() {
  

  const [livros, setLivros] = useState<Livro[]>([]);
  console.log(livros)
  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await listarLivros();

        setLivros(response.data);
      } catch (error) {
        alert("error");
      }
    };

    getDados();
  }, [setLivros]);

  return (

    <div>
      <header>
        <Header />
      </header>
      <C.Container>
        <div className="context">
          <h1>Nossos Livros</h1>
          <h4>
            Os melhores Livros com os melhores preços.
          </h4>
          <Button />
        </div>
       
        <Card className="container container-lg, container-sm, container-sm">
          {livros.map((Livro) => (
            <div className="card ">
            <img src={Livro.foto} className="card-img-top d-flex" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{Livro.nome}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><span>Autor: </span>{Livro.autor}</li>
              <li className="list-group-item">Preço: R$: {Livro.preco}</li>
            </ul>
            <div className="card-body links">
              <a href="#" className="card-link">Ver Livro</a>
              <a href="#" className="card-link">Adicionar ao Carrinho</a>
            </div>
          </div>
          
          ))}
        </Card>
      </C.Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
