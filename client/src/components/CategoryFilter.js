import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/productApi";

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    loadCategories();
  }, []);

  const handleChange = (id) => {
    if (id === "all") {
      setSelectedCategories([]);
    } else {
      if (selectedCategories.includes(id)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== id));
      } else {
        setSelectedCategories([...selectedCategories, id]);
      }
    }
  };

  const checkboxStyle = (isSelected) => ({
    accentColor: isSelected ? "green" : "#ccc",
    cursor: "pointer",
    marginRight: "6px",
  });

  const labelStyle = (isSelected) => ({
    color: isSelected ? "green" : "#000",
    fontWeight: isSelected ? "bold" : "normal",
  });

  return (
    <div>
      {/* All */}
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          ...labelStyle(selectedCategories.length === 0),
        }}
      >
        <input
          type="checkbox"
          checked={selectedCategories.length === 0}
          onChange={() => handleChange("all")}
          style={checkboxStyle(selectedCategories.length === 0)}
        />
        All
      </label>

      <div style={{ borderTop: "1px solid #eee", margin: "10px 0" }}></div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat._id} style={{ marginBottom: "8px" }}>
          <label style={labelStyle(selectedCategories.includes(cat._id))}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat._id)}
              onChange={() => handleChange(cat._id)}
              style={checkboxStyle(selectedCategories.includes(cat._id))}
            />
            {cat.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
