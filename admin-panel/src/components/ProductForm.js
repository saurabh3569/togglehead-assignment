import React, { useState, useEffect } from "react";
import { createProduct, getCategories } from "../api/adminApi";

const ProductForm = ({ onProductCreated }) => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    categoryId: "",
    variants: "",
    image: null,
  });

  useEffect(() => {
    const loadCategories = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };
    loadCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.variants) delete form.variants;

      await createProduct(form);
      alert("Product created successfully");
      setForm({
        name: "",
        description: "",
        categoryId: "",
        variants: "",
        image: null,
      });

      if (onProductCreated) {
        onProductCreated();
      }
    } catch (error) {
      console.error(error);
      alert("Error creating product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 mx-auto"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="mb-4">Create Product</h2>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description:</label>
        <textarea
          name="description"
          className="form-control"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Category:</label>
        <select
          name="categoryId"
          className="form-select"
          value={form.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Variants (JSON):</label>
        <textarea
          name="variants"
          className="form-control"
          value={form.variants}
          onChange={handleChange}
          placeholder='[{"size":"2lb","price":300,"stock":10}]'
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image:</label>
        <input
          type="file"
          name="image"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
