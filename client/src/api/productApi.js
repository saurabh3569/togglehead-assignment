import api from "./api";

// Get all categories
export const fetchCategories = async () => {
  const res = await api.get("/product-categories");
  return res.data;
};

// Get products by category
export const fetchProducts = async (categoryIds = []) => {
  let url = "/products";

  if (categoryIds.length > 0) {
    const query = categoryIds.map((id) => `categoryId=${id}`).join("&");
    url += `?${query}`;
  }

  const res = await api.get(url);
  return res.data;
};
