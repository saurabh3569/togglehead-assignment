const Joi = require("joi");

const productCategorySchema = {
  create: Joi.object({
    name: Joi.string().trim().required(),
    description: Joi.string().trim().allow("").optional(),
  }),
};

module.exports = productCategorySchema;
