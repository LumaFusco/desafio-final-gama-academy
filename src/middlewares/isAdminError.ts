import { Request, Response, NextFunction } from 'express';
import { Usuario } from '../models';

async function isAdminError(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
        const usuario = await Usuario.findById(req.headers['authValidation']);

        if (!usuario?.isAdmin) {
        return res.status(401).json({ error: 'Usuário não autorizado' });
        }
        return next();  
    } catch (err) {
      return res.status(500).json({ error: 'Falha ao verificar categoria' });
    }
  }

  export default isAdminError;



      