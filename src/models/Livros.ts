import mongoose, { Schema, model } from "mongoose";
import Categoria, {categoria} from "./Categorias";

interface livro {
    nome: string,
    foto: string,
    preco: number,
    descricao: string,
    categoria: categoria,
    autor: string,
}

const livroSchema = new Schema<livro>({
    nome: { type: String, required: true},
    foto: { type: String, required: true},
    preco: { type: Number, required: true},
    descricao: { type: String, required: true, },
    categoria: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Categoria" },
    autor: { type: String, required: true },
},
{
    timestamps: true,
}
);

const Livro = model<livro>("Livro", livroSchema);

export default Livro;
