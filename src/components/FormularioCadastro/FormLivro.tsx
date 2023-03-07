import React, { FormEvent, useEffect, useState } from "react";
import * as C from "./FormLivro.style";
import { cadastroLivro } from "../../Services/MainApi/cadastroLivro";
import { listarCategorias } from "../../Services/MainApi/categorias";



console.log(listarCategorias)
interface Categoria  {
  _id: string,
  nome: string,
}

const Formulario = () => {
 
  const [formData, setFormData] = useState({
    nome: "",
    foto: "",
    preco: "",
    descricao: "",
    categoria: "",
    autor: ""
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    foto: "",
    preco: "",
    descricao: "",
    categoria: "",
    autor: "",
  });

  const [isFormSubmit, setIsformSubmit] = useState(false);

  const [formValid, setFormValid] = useState(false);
  function isFormValid() {
    return Object.values(formData).every(
      (value) => value !== "" && parseFloat(formData.preco) > 0
    );
  }

  
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  console.log(categoria)
  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await listarCategorias();

        setCategoria(response.data);
      } catch (error) {
        alert("error");
      }
    };

    getDados();
  }, [setCategoria]);

  const cadastro = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsformSubmit(true);
    console.log(formData);
    const payload = formData;
    try {
      const response = await cadastroLivro(payload);
      if (response.status !==201){
        return alert ('Deu algo errado!')
      }
      alert("Cadastro efetuado com sucesso!")
    } catch (error) {
      return alert ('Deu algo errado!')
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsformSubmit(true);
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === "preco") {
      if (value === "" || (parseFloat(value) <= 0 && "")) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          preco: "O preço deve ser maior que zero.",
        }));
      } else {
        setFormErrors((prevFormErrors) => ({ ...prevFormErrors, preco: "" }));
      }
    }

    const isValid = isFormValid();
    setFormValid(isValid);
  };

  return (
    <C.Container>
      <C.Form>
      <form onSubmit={cadastro} className='container-lg, container-sm, container-sm'>
        <div className="areaForm">
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <label htmlFor="nome">Nome do Livro</label>
        </div>
        <div className="areaForm">
          <input
            type="url"
            id="foto"
            name="foto"
            value={formData.foto}
            onChange={handleChange}
          />
          <label htmlFor="foto">Insira o Link da Imagem</label>
        </div>
        <div className="areaForm">
          <input
            type="text"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
          />
          <label htmlFor="preco">Informe o Preço</label>
        </div>
        <div className="areaForm">
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
          <label htmlFor="descricao">Descrição do Livro</label>
        </div>
        <div className="areaForm">
          <input
            type="text"
            id="autor"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
          />
          <label htmlFor="descricao">Nome do Autor</label>
        </div>
        <div className="areaFormRadio">
          <span>Escolha uma categoria:</span>
          <div>
           
            <label className="radio">
              <input
                type="radio"
                name="categoria"
                value="romance"
                checked={formData.categoria === "romance"}
                onChange={handleChange}
              />
              <p>Romance</p>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="categoria"
                value="psicologia"
                checked={formData.categoria === "psicologia"}
                onChange={handleChange}
              />
              <p>Psicologia</p>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="categoria"
                value="suspense"
                checked={formData.categoria === "suspense"}
                onChange={handleChange}
              />
              <p>Suspense</p>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="categoria"
                value="biografias"
                checked={formData.categoria === "biografias"}
                onChange={handleChange}
              />
              <p>Biografias e Memórias</p>
            </label>
          </div>
        </div>
        <button type="submit" disabled={!formValid || isFormSubmit}>
          Enviar
        </button>
      </form>
      </C.Form>
    </C.Container>
  );
};

export default Formulario;
