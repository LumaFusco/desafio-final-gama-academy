import { Router } from "express";
import authController from "../modules/authController";
import categoriaController from "../modules/categoriaController";
import usuarioController from "../modules/usuarioController";
import livroController from "../modules/livroController";
import validationCategoria from "../validations/categorias/createCategorias";
import validationUsuario from "../validations/usuario/createUsuario";
import validationLivro from "../validations/livros/createLivro";
import validationLogin from "../validations/auth/login";
import authValidation from "../middlewares/auth";

const routes = Router();

routes.post("/login", validationLogin, authController.login)

routes.post("/usuario", validationUsuario, usuarioController.create);
routes.get("/usuario", usuarioController.findAll);
routes.get("/usuario/:id", usuarioController.findOne);
routes.put("/usuario/:id", authValidation,validationUsuario, usuarioController.update);
routes.delete("/usuario/:id", authValidation, usuarioController.delete);

routes.post("/categoria", authValidation, validationCategoria, categoriaController.create);
routes.get("/categoria", categoriaController.findAll);
routes.get("/categoria/:id", categoriaController.findOne);
routes.put("/categoria/:id", authValidation, validationCategoria, categoriaController.update);
routes.delete("/categoria/:id", authValidation, categoriaController.delete);

routes.post("/livro", authValidation, validationLivro, livroController.create);
routes.get("/livro", livroController.findAll);
routes.get("/livro/:id", livroController.findOne);
routes.put("/livro/:id", authValidation, validationLivro, livroController.update);
routes.delete("/livro/:id", authValidation, livroController.delete);


export default routes;