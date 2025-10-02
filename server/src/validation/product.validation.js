const Joi = require("joi");

const productSchema = {
  create: Joi.object({
    name: Joi.string().trim().required(),
    description: Joi.string().trim().allow("").optional(),
    categoryId: Joi.string().required(),
    variants: Joi.string().optional(),
    image: Joi.any().optional(),
  }),
};

module.exports = productSchema;
