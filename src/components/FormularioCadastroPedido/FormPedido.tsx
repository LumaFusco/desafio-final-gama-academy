import React, { useState } from "react";
import * as C from "./FormPedido.style";
import { Link, Link as LinkRoute } from "react-router-dom";

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
            <label htmlFor="nome">Id Usuário</label>
          </div>

          <div className="areaForm">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <label htmlFor="nome">Produto</label>
          </div>

          <div className="areaForm">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <label htmlFor="nome">Valor Total</label>
          </div>

        </form>
        <button type="submit" disabled={!formValid || isFormSubmit}>
          Enviar
        </button>
      </C.Form>
      <br></br>
      <br></br>
      <div className="reset">
      <LinkRoute to="/painel-administrativo">Voltar para o painel administrativo</LinkRoute>
      </div>
    </C.Container>

  );
};

export default Formulario;
