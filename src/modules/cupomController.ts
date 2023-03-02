import { Request, Response, NextFunction } from "express";
import { Cupom } from "../models";

const cupomController = {
    async create(req: Request, res: Response) {
        const {nome, desconto} = req.body;
        try {
            const newCupom = await Cupom.create({
                nome: nome.toUpperCase(),
                desconto
            })
            return res.status(201).json(newCupom);
        } catch(error) {
            return res.status(400).json("Não foi possível realizar o cadastro");
        }  
    },

    async findAll(req: Request, res: Response) {
        try {
            const cupons = await Cupom.find();
            return res.json(cupons);
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const checkCupom = await Cupom.findById(id);
        if (!checkCupom) {
            return  res.status(500).json("Id não encontrado");
        }
        try{
            const cupom = await Cupom.findById(id);
            return res.json(cupom);
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, desconto } = req.body;
        const checkCupom = await Cupom.findById(id);
        if (!checkCupom) {
            return  res.status(500).json("Id não encontrado");
        }
        try {
            await Cupom.updateOne({
                _id: id,
            },
            {
                $set: {
                    nome: nome.toUpperCase(),
                    desconto
                },
            });
            return res.status(200).json("Informações atualizadas");
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const checkCupom = await Cupom.findById(id);
        if (!checkCupom) {
            return  res.status(500).json("Id não encontrado");
        }
        try{
            await Cupom.findByIdAndDelete(id);
            return res.status(200).json("Cupom Deletado");
        } catch (error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default cupomController;