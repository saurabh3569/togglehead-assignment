import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { getProducts } from "../api/adminApi";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {showForm && <ProductForm onProductCreated={loadProducts} />}

      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
