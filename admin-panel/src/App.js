import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
