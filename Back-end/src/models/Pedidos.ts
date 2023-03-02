import mongoose, { Schema, model } from "mongoose";
import { usuario } from "./Usuarios";
import { livro } from "./Livros"

export interface pedido {
    usuario: usuario,
    produto: livro,
    valorTotal: number
}

const pedidoSchema = new Schema<pedido>({
    usuario: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Usuario"},
    produto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Livro"},
    valorTotal: {type: Number, required: true}
   
},
{
    timestamps: true,
}
);

const Pedido = model<pedido>("Pedido", pedidoSchema);

export default Pedido;