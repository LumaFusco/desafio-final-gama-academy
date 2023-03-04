import { Request, Response, NextFunction } from "express";
import { Categoria } from "../models";

const categoriaController = {
    async create(req: Request, res: Response) {
        const {nome} = req.body;
        try {
            const newCategoria = await Categoria.create({
                nome: nome.toUpperCase(),
            })
            return res.status(201).json(newCategoria);
        } catch(error) {
            return res.status(400).json("Não foi possível realizar o cadastro");
        }  
    },

    async findAll(req: Request, res: Response) {
        try {
            const categorias = await Categoria.find();
            return res.json(categorias);
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const checkCategoria = await Categoria.findById(id);
        if (!checkCategoria) {
            return  res.status(500).json("Id não encontrado");
        }
        try{
            const categoria = await Categoria.findById(id);
            return res.json(categoria);
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome } = req.body;
        const checkCategoria = await Categoria.findById(id);
        if (!checkCategoria) {
            return  res.status(500).json("Id não encontrado");
        }
        try {
            await Categoria.updateOne({
                _id: id,
            },
            {
                $set: {
                    nome: nome.toUpperCase()
                },
            });
            return res.status(200).json("Informações atualizadas");
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const checkCategoria = await Categoria.findById(id);
        if (!checkCategoria) {
            return  res.status(500).json("Id não encontrado");
        }
        try{
            await Categoria.findByIdAndDelete(id);
            return res.status(200).json("Categoria Deletada");
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default categoriaController;