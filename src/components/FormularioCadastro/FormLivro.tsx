import React, { useState } from "react";
import * as C from "./FormLivro.style";

const Formulario = () => {
  const [isFormSubmit, setIsformSubmit] = useState(false);

  const [formValid, setFormValid] = useState(false);
  function isFormValid() {
    return Object.values(formData).every((value) => value !== "" && formData.preco !== 0);
  }

  const [formData, setFormData] = useState({
    nome: "",
    imagem: "",
    preco: 0,
    descricao: "",
    categoria: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setIsformSubmit(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    const isValid = isFormValid();
    setFormValid(isValid);
  };

  return (
    <C.Container>
      <form onSubmit={handleSubmit}>
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
        <div className="areaFormRadio">
          <span>Escolha uma categoria:</span>
          <div>
            <label>
              <input
                type="radio"
                name="categoria"
                value="romance"
                checked={formData.categoria === "romance"}
                onChange={handleChange}
              />
              Romance
            </label>
            <label>
              <input
                type="radio"
                name="categoria"
                value="psicologia"
                checked={formData.categoria === "psicologia"}
                onChange={handleChange}
              />
              Psicologia
            </label>
            <label>
              <input
                type="radio"
                name="categoria"
                value="suspense"
                checked={formData.categoria === "suspense"}
                onChange={handleChange}
              />
              Suspense
            </label>
            <label>
              <input
                type="radio"
                name="categoria"
                value="biografias"
                checked={formData.categoria === "biografias"}
                onChange={handleChange}
              />
              Biografias e Memórias
            </label>
          </div>
        </div>
        <button type="submit" disabled={!formValid || isFormSubmit}>
          Enviar
        </button>
      </form>
    </C.Container>
  );
};

export default Formulario;
