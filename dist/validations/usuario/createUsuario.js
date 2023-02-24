"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const express_validation_1 = require("express-validation");
const validationUsuario = (0, express_validation_1.validate)({
    body: joi_1.default.object({
        nome: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        senha: joi_1.default.string().required(),
        isAdmin: joi_1.default.boolean()
    })
});
exports.default = validationUsuario;
