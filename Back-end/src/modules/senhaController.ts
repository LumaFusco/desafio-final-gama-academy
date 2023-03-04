import { Request, Response } from "express";
import { Usuario } from "../models";
import bcrypt from 'bcrypt';
import { Jwt } from "jsonwebtoken";


const newSenha = {
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { senha, newSenha, confirmNewSenha } = req.body;
        const senhaCripto = bcrypt.hashSync(newSenha, 10);
        const checkUsuario = await Usuario.findById(id);
        try {
            if (!checkUsuario) {
                return res.status(404).json("Id não encontrado");
            }
            const match = await bcrypt.compareSync(senha, checkUsuario.senha);
            if (!match) {
                return res.status(401).json('Senha invalida');
            }
            if (!(newSenha === confirmNewSenha)) {
                return res.status(401).json('Senhas não coincidem')
            }
            
            await checkUsuario.set({senha: senhaCripto}).save();

            return res.status(200).json("Informações Atualizadas");
        } catch(error) {
            return  res.status(500).json("Não foi possível realizar a ação");
        }
    },
}

export default newSenha