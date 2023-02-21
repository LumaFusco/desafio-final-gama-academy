"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const config_1 = require("../config");
const authValidation = (0, express_jwt_1.expressjwt)({
    secret: config_1.secret.key,
    algorithms: ["HS256"]
});
exports.default = authValidation;
