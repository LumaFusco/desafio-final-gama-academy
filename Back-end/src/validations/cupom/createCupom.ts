import Joi from 'joi';
import { validate } from 'express-validation'

const validationCupom = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        desconto: Joi.number().required()
    })
});

export default validationCupom;