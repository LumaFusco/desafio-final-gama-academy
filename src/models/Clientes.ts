import { Schema, model } from "mongoose";

interface cliente {
    id: string,
    nome: string,
    email: string,
    senha: string,
    tipo: "cliente" | "admin",
}

const clienteSchema = new Schema<cliente>({
    id: { type: String, required: true},
    nome: { type: String, required: true},
    email: { type: String, required: true},
    senha: { type: String, required: true},
    tipo: { type: String, required: true, default: 'cliente'},
},
{
    timestamps: true,
}
);

const Cliente = model<cliente>("Cliente", clienteSchema);

export default Cliente;
