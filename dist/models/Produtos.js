"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const produtoSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    nome: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true, },
    categoria: { type: String, required: true, },
}, {
    timestamps: true,
});
const Produto = (0, mongoose_1.model)("Produto", produtoSchema);
exports.default = Produto;
