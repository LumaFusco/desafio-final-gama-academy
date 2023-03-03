import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';
import { UnauthorizedError } from 'express-jwt';

interface ErrorResponse {
  message: string;
}

function handleError(
  error: Error | ValidationError | UnauthorizedError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
): void {
  try{
    if (error instanceof ValidationError) {
      res.status(error.statusCode).json({
        message: 'Erro de validação',
      });
    } if (error instanceof UnauthorizedError) {
      res.status(error.status).json({
        message: 'Não autorizado',
      });
    }} catch (error) {  
        res.status(500).json({
          message: 'Erro do Servidor Interno',
        });
    }  
}

export default handleError;