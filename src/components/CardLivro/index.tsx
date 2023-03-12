import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { listarLivros } from "../../Services/MainApi/livros";
import * as C from './index.style';
import { LivroButton } from "../ButtonLivro";
import { Link, Link as LinkRoute } from "react-router-dom";

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
  

export function CardLivro () {
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
        <C.Container>
        <Card className="container container-lg, container-sm, container-sm">
        {livros.map((Livro) => (
          <div className="card ">
          <img src={Livro.foto} className="card-img-top d-flex" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{Livro.nome}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span className="index">Autor: </span>{Livro.autor}</li>
            <li className="list-group-item"><span className="index">Categoria: </span>{Livro.categoria.nome}</li>
            <li className="list-group-item"><span className="index">Preço: R$:</span> {Livro.preco}</li>
          </ul>
          <div className="card-body links">
            
            <LinkRoute to={`Livro/${Livro._id}`}><LivroButton livroId={Livro._id}/></LinkRoute> 
            <a href="#" className="card-link link">Adicionar ao Carrinho</a>
          </div>
        </div>
        
        ))}
      </Card>
      </C.Container>
      )
}