import React from "react";

const ProductList = ({ products }) => {
  if (!products.length) return <p>No products found</p>;

  return (
    <ul className="list-group">
      {products.map((product) => (
        <li key={product._id} className="list-group-item">
          {product.name} - {product.categoryId?.name || "No Category"}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
