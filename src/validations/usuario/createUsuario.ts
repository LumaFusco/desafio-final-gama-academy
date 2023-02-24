import Joi from 'joi';
import { validate } from 'express-validation';


const validationUsuario = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
        isAdmin: Joi.boolean()
    })
});


export default validationUsuario;