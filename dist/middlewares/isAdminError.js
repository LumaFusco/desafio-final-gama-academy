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
function isAdminError(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield models_1.Usuario.findById(res.locals.jwtPayload.id);
            if (!(usuario === null || usuario === void 0 ? void 0 : usuario.isAdmin)) {
                return res.status(401).json({ error: 'Usuário não autorizado' });
            }
            return next();
        }
        catch (error) {
            return res.status(500).json({ error: 'Falha ao verificar Usuario' });
        }
    });
}
exports.default = isAdminError;
