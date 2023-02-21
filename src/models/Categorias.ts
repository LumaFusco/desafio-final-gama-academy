import { Schema, model } from "mongoose";

interface categoria {
    id: string
    categoria: string
}

const categoriaSchema = new Schema<categoria>({
    id: { type: String, required: true, },
    categoria: { type: String, required: true, },
},
{
    timestamps: true,
}
);

const Categoria = model<categoria>("Categoria", categoriaSchema);

export default Categoria;