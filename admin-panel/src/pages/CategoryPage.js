import React, { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import CategoryForm from "../components/CategoryForm";
import { getCategories } from "../api/adminApi";

const CategoryPage = ({ onCategoryAdded }) => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Categories</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Category"}
        </button>
      </div>

      {showForm && <CategoryForm onCategoryAdded={loadCategories} />}

      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryPage;
