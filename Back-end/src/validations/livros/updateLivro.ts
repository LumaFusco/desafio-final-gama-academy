import Joi from 'joi';
import { validate } from 'express-validation'

const updateLivro = validate({
    body: Joi.object({
        nome: Joi.string(),
        foto: Joi.string(),
        preco: Joi.number(),
        descricao: Joi.string(),
        categoria: Joi.string(),
        autor: Joi.string(),
    })
});

export default updateLivro;