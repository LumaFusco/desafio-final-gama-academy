import Joi from 'joi';
import { validate } from 'express-validation'

const validationCategoria = validate({
    body: Joi.object({
        id: Joi.string().required(),
        categoria: Joi.string().required()

    })
});

export default validationCategoria;