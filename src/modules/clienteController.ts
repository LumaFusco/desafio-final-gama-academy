import { Request, Response } from "express";
import { Cliente } from "../models";

const clienteController = {
    async create(req: Request, res: Response) {
        const {nome, email, senha, tipo} = req.body;

        const newCliente = await Cliente.create({
            nome,
            email,
            senha,
            tipo,
        })

        return res.status(201).json(newCliente);
    },
    async findAll(req: Request, res: Response) {
        const clientes = await Cliente.find();

        return res.json(clientes);

    },
    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const cliente = await Cliente.findOne({
            _id: id,
        })

        return res.json(cliente)
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const updated = await Cliente.updateOne({
            _id: id,
        },
        {
        $set: {
            nome,
            email,
            senha,
        },
        });

        return res.sendStatus(204);
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        await Cliente.findByIdAndDelete();

        return res.sendStatus(204);
    },
}

export default clienteController;