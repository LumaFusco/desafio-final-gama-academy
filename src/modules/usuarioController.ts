import { Request, Response } from "express";
import { Usuario } from "../models";
import bcrypt from 'bcrypt';
// import { usuario, } from "../models/Usuarios";

const usuarioController = {
    async create(req: Request, res: Response) {
        const {nome, email, senha, isAdmin} = req.body;
        const senhaCripto = bcrypt.hashSync(senha, 10);
        try{
            const newUsuario = await Usuario.create({
                nome,
                email,
                senha: senhaCripto,
                isAdmin,
            })

            return res.status(201).json(newUsuario);
        } catch(error) {
            return res.status(400).json("Não foi possível realizar o cadastro");
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const usuarios = await Usuario.find();

            return res.json(usuarios);
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const usuario = await Usuario.findById(id)
    
            return res.json(usuario)
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const senhaCripto = bcrypt.hashSync(senha, 10);

        const checkUsuario = await Usuario.findById(id);
        if (!checkUsuario) {
            return res.status(404).json("Id não encontrado");
        }

        try {
            const updated = await Usuario.updateOne({
                id: id,
            },
            {
            $set: {
                nome,
                email,
                senha: senhaCripto,
            },
            });
    
            return res.sendStatus(204).json("Informações atualizadas");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await Usuario.findByIdAndDelete({});

            return res.sendStatus(204).json("Deletado");
        } catch (error) {
            return res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default usuarioController;