import { Request, Response, NextFunction } from 'express';
import { Categoria } from '../models';

async function categoriaError(
  req: Request,
  res: Response,
  next: NextFunction,
){
  try {
    const checkCategoria = await Categoria.findOne({
      nome: req.body.nome,
    });
    if (checkCategoria) {
      return res.status(400).json({ error: 'Já existe uma categoria com esse nome' });
    } return next();  
  } catch (error) {
    return res.status(500).json({ error: 'Falha ao verificar categoria' });
  }
}

export default categoriaError;