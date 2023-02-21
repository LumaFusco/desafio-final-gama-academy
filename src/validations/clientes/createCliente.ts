import Joi from 'joi';
import { validate } from 'express-validation'

const validationCliente = validate({
    body: Joi.object({
        id: Joi.string().required(),
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
        tipo: Joi.string().required()
    })
});

export default validationCliente;