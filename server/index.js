require("dotenv").config();
const express = require("express");
const productCategoryRouter = require("./src/routes/product_category.route");
const productRouter = require("./src/routes/product.route");
const connectDB = require("./src/config/db.config");
const cors = require("cors");

const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/products", productRouter);
app.use("/api/product-categories", productCategoryRouter);

app.listen(5000, async () => {
  await connectDB();
  console.log("Server is running on port 5000");
});
