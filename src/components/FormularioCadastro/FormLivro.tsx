import { event } from "jquery";
import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    description: "",
    category: "",
  });
  const [category, setCategory] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome do Livro</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Insira o Link da imagem</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Informe o preço</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição do Livro</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        Escolha uma categoria:
        <div>
          <label>
            <input
              type="radio"
              name="category"
              value="romance"
              checked={formData.category === "romance"}
              onChange={handleChange}
            />
            Romance
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="psicologia"
              checked={formData.category === "psicologia"}
              onChange={handleChange}
            />
            Psicologia
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="suspense"
              checked={formData.category === "suspense"}
              onChange={handleChange}
            />
            Suspense
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="biografias"
              checked={formData.category === "biografias"}
              onChange={handleChange}
            />
            Biografias e Memórias
          </label>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
