const express = require("express");
const productCategoryRouter = express.Router();

const productCategoryController = require("../controllers/product_category.controller");
const productCategorySchema = require("../validation/product_category.validation");
const validate = require("../middlewares/validate.middleware");

productCategoryRouter.post(
  "/",
  validate(productCategorySchema.create),
  productCategoryController.create
);

productCategoryRouter.get("/", productCategoryController.list);

module.exports = productCategoryRouter;
