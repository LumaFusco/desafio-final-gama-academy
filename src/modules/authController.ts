import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret }from '../config';
import { Usuario } from '../models';


const authController = {
    async login(req: Request, res: Response ) {
        const {email, senha} = req.body;

        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json('Email não cadastrado');
        }

        const match = await bcrypt.compareSync(senha, usuario.senha);
        if (!match) {
            return res.status(401).json('Senha invalida');
        }

        try {
            const token = jwt.sign({ 
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                isAdmin: usuario.isAdmin
            }, 
                secret.key,{
            },
            );
            return res.json(token);
        } catch(error) {
            return res.status(500).json("Não foi possível realizar a ação");
        }
    }
}
  
export default authController;

