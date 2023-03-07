"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const cupomSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    desconto: { type: Number, required: true }
}, {
    timestamps: true,
});
const Cupom = (0, mongoose_1.model)("Cupom", cupomSchema);
exports.default = Cupom;
