"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../modules/authController"));
const categoriaController_1 = __importDefault(require("../modules/categoriaController"));
const usuarioController_1 = __importDefault(require("../modules/usuarioController"));
const livroController_1 = __importDefault(require("../modules/livroController"));
const pedidoController_1 = __importDefault(require("../modules/pedidoController"));
const createCategorias_1 = __importDefault(require("../validations/categorias/createCategorias"));
const createUsuario_1 = __importDefault(require("../validations/usuario/createUsuario"));
const createLivro_1 = __importDefault(require("../validations/livros/createLivro"));
const createPedido_1 = __importDefault(require("../validations/pedidos/createPedido"));
const login_1 = __importDefault(require("../validations/auth/login"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const categoriaError_1 = __importDefault(require("../middlewares/categoriaError"));
const isAdminError_1 = __importDefault(require("../middlewares/isAdminError"));
const routes = (0, express_1.Router)();
routes.post("/login", login_1.default, authController_1.default.login);
routes.post("/usuario", createUsuario_1.default, usuarioController_1.default.create);
routes.get("/usuario", auth_1.default, isAdminError_1.default, usuarioController_1.default.findAll);
routes.get("/usuario/:id", auth_1.default, usuarioController_1.default.findOne);
routes.put("/usuario/:id", auth_1.default, createUsuario_1.default, usuarioController_1.default.update);
routes.delete("/usuario/:id", auth_1.default, isAdminError_1.default, usuarioController_1.default.delete);
routes.post("/categoria", auth_1.default, categoriaError_1.default, isAdminError_1.default, createCategorias_1.default, categoriaController_1.default.create);
routes.get("/categoria", categoriaController_1.default.findAll);
routes.get("/categoria/:id", categoriaController_1.default.findOne);
routes.put("/categoria/:id", auth_1.default, isAdminError_1.default, createCategorias_1.default, categoriaController_1.default.update);
routes.delete("/categoria/:id", auth_1.default, isAdminError_1.default, categoriaController_1.default.delete);
routes.post("/livro", auth_1.default, isAdminError_1.default, createLivro_1.default, livroController_1.default.create);
routes.get("/livro", livroController_1.default.findAll);
routes.get("/livro/:id", livroController_1.default.findOne);
routes.put("/livro/:id", auth_1.default, isAdminError_1.default, createLivro_1.default, livroController_1.default.update);
routes.delete("/livro/:id", auth_1.default, isAdminError_1.default, livroController_1.default.delete);
routes.post("/pedido", auth_1.default, createPedido_1.default, pedidoController_1.default.create);
routes.get("/pedido", auth_1.default, pedidoController_1.default.findAll);
routes.get("/pedido/:id", auth_1.default, pedidoController_1.default.findOne);
routes.put("/pedido/:id", auth_1.default, pedidoController_1.default.update);
routes.delete("/pedido/:id", auth_1.default, pedidoController_1.default.delete);
exports.default = routes;
