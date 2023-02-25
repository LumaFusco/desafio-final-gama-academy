import { Router } from "express";
import authController from "../modules/authController";
import categoriaController from "../modules/categoriaController";
import usuarioController from "../modules/usuarioController";
import livroController from "../modules/livroController";
import pedidoController from "../modules/pedidoController";
import validationCategoria from "../validations/categorias/createCategorias";
import validationUsuario from "../validations/usuario/createUsuario";
import validationLivro from "../validations/livros/createLivro";
import validationPedido from "../validations/pedidos/createPedido";
import validationLogin from "../validations/auth/login";
import authValidation from "../middlewares/auth";
import categoriaError from "../middlewares/categoriaError";
import isAdminError from "../middlewares/isAdminError";

const routes = Router();

routes.post("/login", validationLogin, authController.login)

routes.post("/usuario", validationUsuario, usuarioController.create);
routes.get("/usuario", authValidation , isAdminError, usuarioController.findAll);
routes.get("/usuario/:id", authValidation, usuarioController.findOne);
routes.put("/usuario/:id", authValidation, validationUsuario, usuarioController.update);
routes.delete("/usuario/:id", authValidation, isAdminError, usuarioController.delete);

routes.post("/categoria", authValidation, categoriaError, isAdminError, validationCategoria, categoriaController.create);
routes.get("/categoria", categoriaController.findAll);
routes.get("/categoria/:id", categoriaController.findOne);
routes.put("/categoria/:id", authValidation, isAdminError, validationCategoria, categoriaController.update);
routes.delete("/categoria/:id", authValidation, isAdminError, categoriaController.delete);

routes.post("/livro", authValidation, isAdminError, validationLivro, livroController.create);
routes.get("/livro", livroController.findAll);
routes.get("/livro/:id", livroController.findOne);
routes.put("/livro/:id", authValidation, isAdminError, validationLivro, livroController.update);
routes.delete("/livro/:id", authValidation, isAdminError, livroController.delete);

routes.post("/pedido", authValidation, validationPedido, pedidoController.create);
routes.get("/pedido", authValidation, pedidoController.findAll);
routes.get("/pedido/:id", authValidation, pedidoController.findOne);
routes.put("/pedido/:id", authValidation, pedidoController.update);
routes.delete("/pedido/:id", authValidation, pedidoController.delete);



export default routes;