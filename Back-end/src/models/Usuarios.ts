import { Schema, model } from "mongoose";

export interface usuario {
    nome: string,
    email: string,
    senha: string,
    isAdmin: boolean,
}

const usuarioSchema = new Schema<usuario>({
    nome: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    senha: { type: String, required: true},
    isAdmin: { type: Boolean, required: true, default: false},
},
{
    timestamps: true,
}
);

const Usuario = model<usuario>("Usuario", usuarioSchema);

export default Usuario;