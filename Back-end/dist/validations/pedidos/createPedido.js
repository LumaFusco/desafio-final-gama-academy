"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const express_validation_1 = require("express-validation");
const validationPedido = (0, express_validation_1.validate)({
    body: joi_1.default.object({
        usuario: joi_1.default.string().required(),
        produto: joi_1.default.string().required(),
        valorTotal: joi_1.default.number().required(),
    })
});
exports.default = validationPedido;
