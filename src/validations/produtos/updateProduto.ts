import Joi from 'joi';
import { validate } from 'express-validation'

const updateProduto = validate({
    body: Joi.object({
        id: Joi.string().required(),
    })
});

export default updateProduto;