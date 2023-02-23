import React, { useState } from "react";

const Formulario = () => {
  const [isFormSubmit, setIsformSubmit] = useState(false);
  const [formErros, setFormErros] = useState({
    nome: "",
    imagem: "",
    preco: 0,
    descricao: "",
    categoria: "",
  });

  const [formValid, setFormValid] = useState(false);
  function isFormValid() {
    return Object.values(formData).every((value) => value !== "");
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
    setFormValid(isFormValid());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome do Livro</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {formErros.nome && <span className="error">{formErros.nome}</span>}
      </div>
      <div>
        <label htmlFor="imagem">Insira o Link da imagem</label>
        <input
          type="url"
          id="imagem"
          name="imagem"
          value={formData.imagem}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="preco">Informe o preço</label>
        <input
          type="number"
          id="preco"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição do Livro</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
        />
      </div>
      <div>
        Escolha uma categoria:
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
  );
};

export default Formulario;
