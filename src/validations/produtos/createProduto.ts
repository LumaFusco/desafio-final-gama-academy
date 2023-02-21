import Joi from 'joi';
import { validate } from 'express-validation'

const createProduto = validate({
    body: Joi.object({
        id: Joi.string().required(),
        nome: Joi.string().required(),
        foto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string().required(),
        categoria: Joi.string().required()

    })
});

export default createProduto;