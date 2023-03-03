import Joi from 'joi';
import { validate } from 'express-validation'

const validationCategoria = validate({
    body: Joi.object({
        nome: Joi.string().required()
    })
});

export default validationCategoria;