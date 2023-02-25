import { Request, Response } from "express";
import Pedido from "../models/Pedidos";

const pedidoController = {
    async create(req: Request, res: Response) {
        const {usuario, produto, valorTotal} = req.body;
        try {
            const newPedido = await Pedido.create({
                usuario,
                produto,
                valorTotal
            })
            
            return res.status(201).json(newPedido);
        } catch(error) {
            return res.status(400).json("Ocorreu um erro");
        }

    },

    async findAll(req: Request, res: Response) {
        try {
            const pedidos = await Pedido.find();

            return res.json(pedidos);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const pedido = await Pedido.findById(id)
    
            return res.json(pedido)
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { usuario, produto, valorTotal} = req.body;
        try {
            const updated = await Pedido.updateOne({
                _id: id,
            },
            {
            $set: {
                usuario,
                produto,
                valorTotal
            },
            });
            return res.status(204).json("Pedido atualizado");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await Pedido.findByIdAndDelete(id);

            return res.status(204).json("Pedido deletado");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default pedidoController;