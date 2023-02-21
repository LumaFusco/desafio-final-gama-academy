import { Router } from "express";
import authController from "../modules/authController";
import categoriaController from "../modules/categoriaController";
import clienteController from "../modules/clienteController";
import produtoController from "../modules/podutoController";
import validationCategoria from "../validations/categorias/createCategorias";
import validationCliente from "../validations/clientes/createCliente";
import validationProduto from "../validations/produtos/createProduto";
import validationLogin from "../validations/auth/login";
import updateCategoria from "../validations/categorias/updateCategoria";
import updateCliente from "../validations/clientes/updateCliente";
import updateProduto from "../validations/produtos/updateProduto";
import authValidation from "../middlewares/auth";

const routes = Router();

routes.post("/login", validationLogin, authController.login)

routes.post("/cliente", validationCliente, clienteController.create);
routes.get("/cliente", validationCliente, clienteController.findAll);
routes.get("/cliente/:id", updateCliente, clienteController.findOne);
routes.put("/cliente/:id", updateCliente, validationCliente, clienteController.update);
routes.delete("/cliente/:id", authValidation, updateCliente, clienteController.delete);

routes.post("/categoria", authValidation, validationCategoria, categoriaController.create);
routes.get("/categoria", validationCategoria, categoriaController.findAll);
routes.get("/categoria/:id", updateCategoria, categoriaController.findOne);
routes.put("/categoria/:id", authValidation, updateCategoria ,validationCategoria, categoriaController.update);
routes.delete("/categoria/:id", authValidation, updateCategoria, categoriaController.delete);

routes.post("/produto", authValidation, validationProduto, produtoController.create);
routes.get("/produto", validationProduto, produtoController.findAll);
routes.get("/produto/:id", updateProduto, produtoController.findOne);
routes.put("/produto/:id", authValidation, updateProduto, validationProduto, produtoController.update);
routes.delete("/produto/:id", authValidation, updateProduto, produtoController.delete);


export default routes;