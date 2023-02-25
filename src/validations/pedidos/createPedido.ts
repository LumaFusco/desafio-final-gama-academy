import Joi from 'joi';
import { validate } from 'express-validation';


const validationPedido = validate({
    body: Joi.object({
        usuario: Joi.string().required(),
        produto: Joi.string().required(),
        valorTotal: Joi.number().required(),
    })
});

export default validationPedido