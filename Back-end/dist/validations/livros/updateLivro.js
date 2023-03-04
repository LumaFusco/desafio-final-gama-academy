"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const express_validation_1 = require("express-validation");
const updateLivro = (0, express_validation_1.validate)({
    body: joi_1.default.object({
        nome: joi_1.default.string(),
        foto: joi_1.default.string(),
        preco: joi_1.default.number(),
        descricao: joi_1.default.string(),
        categoria: joi_1.default.string(),
        autor: joi_1.default.string(),
    })
});
exports.default = updateLivro;
