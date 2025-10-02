const express = require("express");
const productRouter = express.Router();

const validate = require("../middlewares/validate.middleware");
const productSchema = require("../validation/product.validation");
const productController = require("../controllers/product.controller");
const upload = require("../middlewares/upload.middleware");

productRouter.post(
  "/",
  upload.single("image"),
  validate(productSchema.create),
  productController.create
);

productRouter.get("/", productController.list);

module.exports = productRouter;
