const Product = require("../models/product.model");
const ProductCategory = require("../models/product_category.model");

const productController = {
  create: async (req, res) => {
    try {
      const { name, description, categoryId, variants } = req.body;

      const categoryExists = await ProductCategory.findById(categoryId);
      if (!categoryExists) {
        return res.status(400).json({ error: "Invalid category ID" });
      }

      const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

      const newProduct = new Product({
        name,
        description,
        categoryId,
        variants: variants ? JSON.parse(req.body.variants) : [],
        image: imagePath,
      });

      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.log(error);

      res.status(500).json({ error: "Failed to create product" });
    }
  },
  list: async (req, res) => {
    try {
      let { categoryId } = req.query;
      let filter = {};

      if (categoryId) {
        const categories = Array.isArray(categoryId)
          ? categoryId
          : categoryId.split(",");

        filter.categoryId = { $in: categories };
      }

      const products = await Product.find(filter).populate("categoryId");
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  },
};

module.exports = productController;
