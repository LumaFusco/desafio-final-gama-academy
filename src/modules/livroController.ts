import { Request, Response } from "express";
import { Livro } from "../models";
// import Usuario, { usuario, nivel } from "../models/Usuarios";

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
            
            // colocar código para só admin poder fazer cadastro
            // const admin = req.params.id;
            // const checknivel = await Usuario.findOne(id);

            // if (admin !== nivel.ADMIN ) {
            //     return res.status(403).json("Somente administradores podem realizar essa ação")
            // }
            
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
        try {
            const updated = await Livro.updateOne({
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
            });
            return res.sendStatus(204).json("Informações atualizadas");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await Livro.findByIdAndDelete({});

            return res.sendStatus(204).json("Deletado");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default livroController;