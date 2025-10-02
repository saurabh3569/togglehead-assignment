import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedCategories }) => {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(selectedCategories);
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };

    loadProducts();
  }, [selectedCategories]);

  useEffect(() => {
    const grouped = products.reduce((acc, product) => {
      const categoryName = product.categoryId?.name || "Uncategorized";
      if (!acc[categoryName]) acc[categoryName] = [];
      acc[categoryName].push(product);
      return acc;
    }, {});
    setGroupedProducts(grouped);
  }, [products]);

  return (
    <div>
      {Object.keys(groupedProducts).length === 0 ? (
        <p>No products found.</p>
      ) : (
        Object.keys(groupedProducts).map((category) => (
          <div key={category} style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "1rem",
                color: "green",
              }}
            >
              {category} ({groupedProducts[category].length} Products)
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {groupedProducts[category].map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
