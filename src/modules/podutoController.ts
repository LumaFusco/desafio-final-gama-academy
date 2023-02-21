import { Request, Response } from "express";
import { Produto } from "../models";

const produtoController = {
    async create(req: Request, res: Response) {
        const {id, nome, foto, preco, descricao, categoria} = req.body;
        try {
            const newProduto = await Produto.create({
                id,
                nome,
                foto,
                preco,
                descricao,
                categoria,
            })
    
            return res.status(201).json(newProduto);
        } catch(error) {
            return res.status(400).json("Não foi possível realizar o cadastro");
        }

    },

    async findAll(req: Request, res: Response) {
        try {
            const produtos = await Produto.find();

            return res.json(produtos);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const produto = await Produto.findOne({
                _id: id,
            })
    
            return res.json(produto)
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, foto, preco, descricao, categoria } = req.body;
        try {
            const updated = await Produto.updateOne({
                _id: id,
            },
            {
            $set: {
                nome, 
                foto, 
                preco, 
                descricao, 
                categoria
            },
            });
    
            return res.sendStatus(204);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await Produto.findByIdAndDelete({});
    
            return res.sendStatus(204);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default produtoController;