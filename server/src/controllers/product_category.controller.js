const ProductCategory = require("../models/product_category.model");

const productCategoryController = {
  create: async (req, res) => {
    try {
      const { name, description } = req.body;

      const existingCategory = await ProductCategory.findOne({ name });

      if (existingCategory) {
        return res.status(400).json({ error: "Category already exists" });
      }

      const newCategory = new ProductCategory({ name, description });
      const savedCategory = await newCategory.save();

      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(500).json({ error: "Failed to create category" });
    }
  },
  list: async (req, res) => {
    try {
      const categories = await ProductCategory.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  },
};

module.exports = productCategoryController;
