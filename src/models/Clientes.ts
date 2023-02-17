import { Schema, model } from "mongoose";

interface Ucliente {
    nome: string,
    email: string,
    senha: string,
    tipo: string,
}

const clienteSchema = new Schema<Ucliente>({
    nome: { type: String, required: true},
    email: { type: String, required: true},
    senha: { type: String, required: true},
    tipo: { type: String, required: true, default: "CLIENTE" },
},
{
    timestamps: true,
}
);

const Cliente = model<Ucliente>("User", clienteSchema);

export default Cliente;
