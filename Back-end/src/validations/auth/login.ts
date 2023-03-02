import Joi from 'joi';
import { validate } from 'express-validation'

const validationLogin = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
    })
});

export default validationLogin;