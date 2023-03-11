import { useEffect, useState } from "react";
import { livrosCategoria } from "../../Services/MainApi/livro.categoria.id";
import { useNavigate } from "react-router-dom";
import { listarCategorias } from "../../Services/MainApi/categorias";
import * as C from "./button.style";

interface Categoria {
  _id: string;
  nome: string;
}

function ButtonSelect() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await listarCategorias();
        setCategoria(response.data);
        console.log(listarCategorias);
      } catch (error) {
        alert("error");
      }
    };
    getDados();
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleBuscarLivros = (event: React.FormEvent) => {
    event.preventDefault();
    livrosCategoria(selectedValue || "")
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          navigate(`/Livro/categoria/${selectedValue}`);
        } else {
          alert("Não foram encontrados livros para essa categoria.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <C.Container>
      <form onSubmit={handleBuscarLivros}>
        <select name="categoria" className="MySelect" onChange={handleChange}>
          <option>Selecione a categoria</option>
          {categoria.map((Categoria) => (
            <option className="opt" value={Categoria._id} key={Categoria._id}>
              {Categoria.nome}
            </option>
          ))}
        </select>

        <input type="submit" value="Buscar" />
      </form>
    </C.Container>
  );
}
export default ButtonSelect;
