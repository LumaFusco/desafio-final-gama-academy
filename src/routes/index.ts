import { Router } from "express";
import clienteController from "../modules/clienteController"


const routes = Router();

routes.post("/cliente", clienteController.create);
routes.get("/cliente", clienteController.findAll);
routes.get("/cliente/:id", clienteController.findOne);
routes.put("/cliente/:id", clienteController.update);
routes.delete("/cliente/:id", clienteController.delete);


export default routes;