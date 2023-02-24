import { Schema, model } from "mongoose";

export interface categoria {
    nome: string
};

const categoriaSchema = new Schema<categoria>({
    nome: { type: String, required: true, },
},
{
    timestamps: true,
}
);

const Categoria = model<categoria>("Categoria", categoriaSchema);

export default Categoria;