"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
function categoriaError(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkCategoria = yield models_1.Categoria.findOne({
                nome: req.body.nome.toUpperCase(),
            });
            if (checkCategoria) {
                return res.status(400).json({ error: 'Já existe uma categoria com esse nome' });
            }
            return next();
        }
        catch (error) {
            return res.status(500).json({ error: 'Falha ao verificar categoria' });
        }
    });
}
exports.default = categoriaError;
