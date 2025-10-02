import React, { useState } from "react";
import { createCategory } from "../api/adminApi";

const CategoryForm = ({ onCategoryAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory({ name, description });
      alert("Category created successfully");
      setName("");
      setDescription("");
      if (onCategoryAdded) {
        onCategoryAdded();
      }
    } catch (error) {
      console.error(error);
      alert("Error creating category");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="mb-4">Create Category</h2>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description:</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Category
      </button>
    </form>
  );
};

export default CategoryForm;
