const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    variants: [
      {
        size: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, default: 0 },
      },
    ],
    image: { type: String },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
module.exports = Product;
