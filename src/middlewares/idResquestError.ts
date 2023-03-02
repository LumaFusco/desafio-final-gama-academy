import { Request, Response, NextFunction } from 'express';
import { Usuario } from '../models';

async function idRequestError(
  req: Request,
  res: Response,
  next: NextFunction
){
  try {
      const usuario = await Usuario.findById(req.headers['id']);
      if (usuario?.isAdmin) {
        return next();
      } 
      if (usuario?.id == req.params['id']) {
        return next();
      }
      return res.status(401).json('Usuário não autorizado');
  } catch (error) {
    return res.status(500).json({ error: 'Falha ao verificar Usuario' });
  }
}

export default idRequestError;