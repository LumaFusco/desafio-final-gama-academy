import { Schema, model } from "mongoose";

export interface cupom {
    nome: string,
    desconto: number 
};

const cupomSchema = new Schema<cupom>({
    nome: { type: String, required: true},
    desconto: {type: Number, required: true}
},
{
    timestamps: true,
}
);

const Cupom = model<cupom>("Cupom", cupomSchema);

export default Cupom;