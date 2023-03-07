"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cupom = exports.Pedido = exports.Categoria = exports.Livro = exports.Usuario = void 0;
const Usuarios_1 = __importDefault(require("./Usuarios"));
exports.Usuario = Usuarios_1.default;
const Livros_1 = __importDefault(require("./Livros"));
exports.Livro = Livros_1.default;
const Categorias_1 = __importDefault(require("./Categorias"));
exports.Categoria = Categorias_1.default;
const Pedidos_1 = __importDefault(require("./Pedidos"));
exports.Pedido = Pedidos_1.default;
const Cupom_1 = __importDefault(require("./Cupom"));
exports.Cupom = Cupom_1.default;
