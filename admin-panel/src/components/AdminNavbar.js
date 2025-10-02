import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "#2ecc71",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>
        Dashboard
      </Link>
      <Link to="/categories" style={{ color: "#fff", fontWeight: "bold" }}>
        Categories
      </Link>
      <Link to="/products" style={{ color: "#fff", fontWeight: "bold" }}>
        Products
      </Link>
    </nav>
  );
};

export default AdminNavbar;
