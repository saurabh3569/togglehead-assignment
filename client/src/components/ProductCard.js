import React from "react";

const ProductCard = ({ product }) => {
  const hasVariants = product.variants && product.variants.length > 0;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "250px",
        background: "#fff",
      }}
    >
      {/* Product Image */}
      {product.image && (
        <img
          src={`${process.env.REACT_APP_API_URL}${product.image}`}
          alt={product.name}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      )}

      {/* Product Details */}
      <h3 style={{ margin: "10px 0 5px", textAlign: "center" }}>
        {product.name}
      </h3>
      <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
        {product.description}
      </p>

      {/* Variants Summary */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        {hasVariants ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Available in {product.variants.map((v) => v.size).join(", ")}
          </p>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>Not available</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
