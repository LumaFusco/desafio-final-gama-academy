"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const express_jwt_1 = require("express-jwt");
function handleError(error, req, res, next) {
    try {
        if (error instanceof express_validation_1.ValidationError) {
            res.status(error.statusCode).json({
                message: 'Erro de validação',
            });
        }
        if (error instanceof express_jwt_1.UnauthorizedError) {
            res.status(error.status).json({
                message: 'Não autorizado',
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: 'Erro do Servidor Interno',
        });
    }
}
exports.default = handleError;
