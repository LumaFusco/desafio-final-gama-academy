"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../modules/clienteController"));
const routes = (0, express_1.Router)();
routes.post("/cliente", clienteController_1.default.create);
routes.get("/cliente", clienteController_1.default.findAll);
routes.get("/cliente/:id", clienteController_1.default.findOne);
routes.put("/cliente/:id", clienteController_1.default.update);
routes.delete("/cliente/:id", clienteController_1.default.delete);
exports.default = routes;
