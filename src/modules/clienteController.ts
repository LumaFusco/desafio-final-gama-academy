import { Request, Response } from "express";
import { Cliente } from "../models";
import bcrypt from 'bcrypt';

const clienteController = {
    async create(req: Request, res: Response) {
        const {id, nome, email, senha, tipo,} = req.body;
        const senhaCripto = bcrypt.hashSync(senha, 10);
        try{
            const newCliente = await Cliente.create({
                id,
                nome,
                email,
                senha: senhaCripto,
                tipo,
            })
    
            return res.status(201).json(newCliente);
        } catch(error) {
            return res.status(400).json("Não foi possível realizar o cadastro");
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const clientes = await Cliente.find();

            return res.json(clientes);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findOne({
                _id: id,
            })
    
            return res.json(cliente)
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const senhaCripto = bcrypt.hashSync(senha, 10);

        const checkCliente = await Cliente.findById(id);
        if (!checkCliente) {
            return res.status(404).json("Id não encontrado");
        }

        try {
            const updated = await Cliente.updateOne({
                id: id,
            },
            {
            $set: {
                nome,
                email,
                senha: senhaCripto,
            },
            });
    
            return res.sendStatus(204);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await Cliente.findByIdAndDelete({});

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default clienteController;