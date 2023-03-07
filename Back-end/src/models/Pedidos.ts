import mongoose, { Schema, model } from "mongoose";
import { usuario } from "./Usuarios";
import { livro } from "./Livros"
import { cupom } from "./Cupom";

export interface pedido {
    usuario: usuario,
    produto: livro,
    cupom: cupom,
    valorTotal: number
}

const pedidoSchema = new Schema<pedido>({
    usuario: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Usuario"},
    produto: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: "Livro"}],
    cupom: {type: mongoose.Schema.Types.ObjectId, ref: "Cupom"},
    valorTotal: {type: Number, required: true}
   
},
{
    timestamps: true,
}
);

const Pedido = model<pedido>("Pedido", pedidoSchema);

export default Pedido;