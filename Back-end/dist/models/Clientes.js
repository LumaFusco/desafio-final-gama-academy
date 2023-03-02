"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clienteSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    tipo: { type: String, required: true, default: 'cliente' },
}, {
    timestamps: true,
});
const Cliente = (0, mongoose_1.model)("Cliente", clienteSchema);
exports.default = Cliente;
