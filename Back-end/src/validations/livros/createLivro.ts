import Joi from 'joi';
import { validate } from 'express-validation'

const validationLivro = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        foto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string().required(),
        categoria: Joi.string().required(),
        autor: Joi.string().required(),
    })
});

export default validationLivro;