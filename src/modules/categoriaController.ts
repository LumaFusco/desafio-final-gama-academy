import { Request, Response } from "express";
import { Categoria } from "../models";

const categoriaController = {
    async create(req: Request, res: Response) {
        const {id, nome} = req.body;

        const checkCategoria = await Categoria.count(nome);
        if (checkCategoria) {
            return res.status(500).json("categoria já cadastrada");
        }
        try {
            const newCategoria = await Categoria.create({
                id,
                nome,
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
        try{
            const categoria = await Categoria.findOne({
                id: id,
            })
    
            return res.json(categoria)
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome } = req.body;
       
        const checkCategoria = await Categoria.findById(id);
        if (!checkCategoria) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
            
        try {
            const updated = await Categoria.updateOne({
                id: nome,
            },
            {
            $set: {
                nome
            },
            });
    
            return res.sendStatus(204);
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }

    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const checkCategoria = await Categoria.findById(id);
        if (!checkCategoria) {
            return res.status(404).json("Id não encontrado");
        }
        try{
            await Categoria.findByIdAndDelete({});

            return res.sendStatus(204);
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default categoriaController;