import { Request, Response } from "express";
import Pedido from "../models/Pedidos";

const pedidoController = {
    async create(req: Request, res: Response) {
        const {usuario, produto, cupom, valorTotal} = req.body;
        try {
            const newPedido = await Pedido.create({
                usuario,
                produto,
                cupom,
                valorTotal
            })
            await newPedido.populate('usuario');
            await newPedido.populate('produto');
            await newPedido.populate('cupom');
            return res.status(201).json(newPedido);
        } catch(error) {
            return res.status(400).json("Ocorreu um erro");
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const pedidos = await Pedido.find().populate('produto').populate('usuario').populate('cupom');
            return res.json(pedidos);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const checkPedido = await Pedido.findById(id);
        if (!checkPedido) {
            return  res.status(404).json("Id não encontrado");
        }
        try {
            const pedido = await Pedido.findById(id)
            await pedido?.populate('usuario');
            await pedido?.populate('produto');
            await pedido?.populate('cupom');
            return res.json(pedido);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { usuario, produto, cupom, valorTotal} = req.body;
        const checkPedido = await Pedido.findById(id);
        if (!checkPedido) {
            return  res.status(404).json("Id não encontrado");
        }
        try {
            await Pedido.updateOne({
                _id: id,
            },
            {
                $set: {
                    usuario,
                    produto,
                    cupom,
                    valorTotal
                },
            });
            return res.status(200).json("Pedido atualizado");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const checkPedido = await Pedido.findById(id);
        if (!checkPedido) {
            return  res.status(404).json("Id não encontrado");
        }
        try {
            await Pedido.findByIdAndDelete(id);
            return res.status(200).json("Pedido deletado");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default pedidoController;