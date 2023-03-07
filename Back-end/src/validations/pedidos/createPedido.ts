import Joi from 'joi';
import { validate } from 'express-validation';

const validationPedido = validate({
    body: Joi.object({
        usuario: Joi.string().required(),
        produto: Joi.array().items().required(),
        cupom: Joi.string(),
        valorTotal: Joi.number().required(),
    })
});

export default validationPedido