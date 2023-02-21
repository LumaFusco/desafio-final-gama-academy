"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categoriaSchema = new mongoose_1.Schema({
    id: { type: String, required: true, },
    categoria: { type: String, required: true, },
}, {
    timestamps: true,
});
const Categoria = (0, mongoose_1.model)("Categoria", categoriaSchema);
exports.default = Categoria;
