import { Router } from "express";
import authController from "../modules/authController";
import categoriaController from "../modules/categoriaController";
import cupomController from "../modules/cupomController";
import usuarioController from "../modules/usuarioController";
import livroController from "../modules/livroController";
import pedidoController from "../modules/pedidoController";
import newSenha from "../modules/senhaController";
import validationCategoria from "../validations/categorias/createCategorias";
import validationCupom from "../validations/cupom/createCupom";
import validationUsuario from "../validations/usuario/createUsuario";
import validationLivro from "../validations/livros/createLivro";
import validationPedido from "../validations/pedidos/createPedido";
import validationLogin from "../validations/auth/login";
import authValidation from "../middlewares/auth";
import updateLivro from "../validations/livros/updateLivro";
import categoriaError from "../middlewares/categoriaError";
import isAdminError from "../middlewares/isAdminError";
import idRequestError from "../middlewares/idResquestError";

const routes = Router();

routes.post("/login", validationLogin, authController.login)
routes.put("/login/senha/:id", authValidation, idRequestError, newSenha.update);

routes.post("/usuario", validationUsuario, usuarioController.create);
routes.get("/usuario", authValidation, isAdminError, usuarioController.findAll);
routes.get("/usuario/:id", authValidation ,idRequestError, usuarioController.findOne);
routes.put("/usuario/:id", authValidation, idRequestError ,usuarioController.update);
routes.delete("/usuario/:id", authValidation, isAdminError, usuarioController.delete);

routes.post("/categoria", authValidation, categoriaError, isAdminError, validationCategoria, categoriaController.create);
routes.get("/categoria", categoriaController.findAll);
routes.get("/categoria/:id", categoriaController.findOne);
routes.put("/categoria/:id", authValidation, isAdminError, categoriaError, validationCategoria, categoriaController.update);
routes.delete("/categoria/:id", authValidation, isAdminError, categoriaController.delete);

routes.post("/livro", authValidation, isAdminError, validationLivro, livroController.create);
routes.get("/livro", livroController.findAll);
routes.get("/livro/categoria/:id", livroController.find);
routes.get("/livro/:id", livroController.findOne);
routes.put("/livro/:id", authValidation, isAdminError, updateLivro, livroController.update);
routes.delete("/livro/:id", authValidation, isAdminError, livroController.delete);

routes.post("/cupom", authValidation, isAdminError, validationCupom, cupomController.create);
routes.get("/cupom", authValidation, cupomController.findAll);
routes.get("/cupom/:id", authValidation, cupomController.findOne);
routes.put("/cupom/:id", authValidation, isAdminError, cupomController.update);
routes.delete("/cupom/:id", authValidation, isAdminError, cupomController.delete);

routes.post("/pedido", authValidation, validationPedido, pedidoController.create);
routes.get("/pedido", authValidation, pedidoController.findAll);
routes.get("/pedido/:id", authValidation, pedidoController.findOne);
routes.put("/pedido/:id", authValidation, pedidoController.update);
routes.delete("/pedido/:id", authValidation, pedidoController.delete);

export default routes;