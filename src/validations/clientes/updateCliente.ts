import Joi from 'joi';
import { validate } from 'express-validation'

const updateCliente = validate({
    body: Joi.object({
        id: Joi.string().required(),
    })
});

export default updateCliente;