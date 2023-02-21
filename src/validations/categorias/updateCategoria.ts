import Joi from 'joi';
import { validate } from 'express-validation'

const updateCategoria = validate({
    body: Joi.object({
        id: Joi.string().required(),
    })
});

export default updateCategoria;