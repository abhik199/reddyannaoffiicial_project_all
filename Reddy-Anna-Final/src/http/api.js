import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export const login = (data) => api.post("/login", data);
export const register = (data) => api.post("/register", data);

// export const add_cards = (data) => api.post("/cards", data);
// export const get_cards = (data) => api.get("/cards", data);
// export const remove_cards = (data) => api.delete("/cards/:id", data);

// Get Token from Local Storage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Authenticated API Calls
export const add_cards = (data) =>
  api.post("/cards", data, { headers: getAuthHeaders() });
export const get_cards = () => api.get("/cards");
export const remove_cards = (id) =>
  api.delete(`/cards/${id}`, { headers: getAuthHeaders() });

export const add_slider = (data) => api.post("/sliders", data);
export const get_slider = () => api.get("/sliders");
export const remove_slider = (id) =>
  api.delete(`/sliders/${id}`, { headers: getAuthHeaders() });
