import { Request, Response } from "express";
import { Usuario } from "../models";
import bcrypt from 'bcrypt';

const usuarioController = {
    async create(req: Request, res: Response) {
        const {nome, email, senha, isAdmin} = req.body;
        const senhaCripto = bcrypt.hashSync(senha, 10);
        try{
            const newUsuario = await Usuario.create({
                nome: nome.toUpperCase(),
                email: email.toLowerCase(),
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
        const checkUsuario = await Usuario.findById(id);
        if (!checkUsuario) {
            return res.status(404).json("Id não encontrado");
        }
        try {
            const usuario = await Usuario.findById(id)
            return res.json(usuario)
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, email} = req.body;
        const checkUsuario = await Usuario.findById(id);
        if (!checkUsuario) {
            return res.status(404).json("Id não encontrado");
        }
        try {
            await Usuario.updateOne({
                _id: id,
            },
            {
                $set: {
                    nome: nome?.toUpperCase(),
                    email: email?.toLowerCase(),
                },
            });
            return res.status(200).json("Informações Atualizadas");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const checkUsuario = await Usuario.findById(id);
        if (!checkUsuario) {
            return res.status(404).json("Id não encontrado");
        }
        try {
            await Usuario.findByIdAndDelete(id);
            return res.status(200).json("Usuário Deletado");
        } catch (error) {
            return res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default usuarioController;