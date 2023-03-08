import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import * as C from "./index.style";
import Button from "../../components/Button/";
import React, { useEffect, useState } from "react";
import { listarLivros } from "../../Services/MainApi/livros";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardLivro } from "../../components/CardLivro";




interface Livro {
  _id: string;
  nome: string;
  foto: string;
  preco: number;
  categoria: {
    nome: string;
  }
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
  }, []);

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
        <CardLivro />
      </C.Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
