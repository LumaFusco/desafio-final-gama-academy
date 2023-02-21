import { Schema, model } from "mongoose";

interface produto {
    id: string
    nome: string,
    foto: string,
    preco: number,
    descricao: string,
    categoria: string,
}

const produtoSchema = new Schema<produto>({
    id: { type: String, required: true},
    nome: { type: String, required: true},
    foto: { type: String, required: true},
    preco: { type: Number, required: true},
    descricao: { type: String, required: true, },
    categoria: { type: String, required: true, },
},
{
    timestamps: true,
}
);

const Produto = model<produto>("Produto", produtoSchema);

export default Produto;
