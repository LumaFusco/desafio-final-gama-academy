import { Request, Response } from "express";
import { Categoria, Livro } from "../models";

const livroController = {
    async create(req: Request, res: Response) {
        const {nome, foto, preco, descricao, categoria, autor} = req.body;
        try {
            const newLivro = await Livro.create({
                nome,
                foto,
                preco,
                descricao,
                categoria,
                autor
            })
            return res.status(201).json(newLivro);
        } catch(error) {
            return res.status(400).json("Não foi possível realizar o cadastro");
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const livros = await Livro.find();
            return res.json(livros);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const livro = await Livro.findById(id)
            return res.json(livro)
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, foto, preco, descricao, categoria, autor } = req.body;
        const checkLivro = await Livro.findById(id);
        if (!checkLivro) {
            return  res.status(500).json("Id não encontrado");
        }
        try {
            await Livro.updateOne({
                _id: id,
            },
            {
            $set: {
                nome,
                foto, 
                preco, 
                descricao, 
                categoria,
                autor
            },
            })
            return res.status(200).json("Informações atualizadas");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const checkLivro = await Livro.findById(id);
        if (!checkLivro) {
            return  res.status(500).json("Id não encontrado");
        }
        try {
            await Livro.findByIdAndDelete(id)
            return res.status(200).json("Livro deletado");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default livroController;