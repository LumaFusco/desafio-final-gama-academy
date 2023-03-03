import React, { useState } from "react";
import * as C from "./FormLivro.style";

const Formulario = () => {
  const [isFormSubmit, setIsformSubmit] = useState(false);

  const [formValid, setFormValid] = useState(false);
  function isFormValid() {
    return Object.values(formData).every(
      (value) => value !== "" && parseFloat(formData.preco) > 0
    );
  }

  const [formData, setFormData] = useState({
    nome: "",
    imagem: "",
    preco: "",
    descricao: "",
    categoria: "",
    autor: ""
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    imagem: "",
    preco: "",
    descricao: "",
    categoria: "",
    autor: "",
  });

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
      <form onSubmit={handleSubmit} className='container-lg, container-sm, container-sm'>
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
            id="imagem"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
          />
          <label htmlFor="imagem">Insira o Link da Imagem</label>
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
