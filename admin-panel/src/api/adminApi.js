import axios from "axios";

const API_BASE = "http://localhost:5000/api";

// Category APIs
export const createCategory = async (categoryData) => {
  try {
    const res = await axios.post(
      `${API_BASE}/product-categories`,
      categoryData
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error creating category:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_BASE}/product-categories`);
    return res.data;
  } catch (error) {
    console.error(
      "Error fetching categories:",
      error.response?.data || error.message
    );
    return [];
  }
};

// Product APIs
export const createProduct = async (productData) => {
  try {
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      if (productData[key] !== null && productData[key] !== undefined) {
        formData.append(key, productData[key]);
      }
    });

    const res = await axios.post(`${API_BASE}/products`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`${API_BASE}/products`);
    return res.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    return [];
  }
};
