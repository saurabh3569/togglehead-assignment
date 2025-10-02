const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productCategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const ProductCategory = model("Category", productCategorySchema);
module.exports = ProductCategory;
