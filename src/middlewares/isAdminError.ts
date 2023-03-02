import { Request, Response, NextFunction } from 'express';
import { Usuario } from '../models';

async function isAdminError(
  req: Request,
  res: Response,
  next: NextFunction
){
  try {
    const usuario = await Usuario.findById(req.headers['id']);
    if (!usuario?.isAdmin) {
        return res.status(401).json({ error: 'Usuário não autorizado' });
      }
      return next();  
  } catch (error) {
    return res.status(500).json({ error: 'Falha ao verificar Usuario' });
  }
}

export default isAdminError;