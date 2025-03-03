import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const admin_login = (data) => api.post("/login", data);
export const admin_register = (data) => api.post("/register", data);

// category

export const get_categories = () => api.get("/category");
export const add_category = (data) => api.post("/category", data);

// blog

export const get_blogs = () => api.get("/blog");
export const add_blog = (data) => api.post("/blog", data);
export const update_blog = (id, data) => api.put(`/blog/${id}`, data);
export const delete_blog = (id) => api.delete(`/blog/${id}`);

// find blog by category

export const get_blog_by_category = (categoryId) =>
  api.get(`/blog/${categoryId}`);

// contact

export const get_contacts = () => api.get("/contact");
export const add_contact = (data) => api.post("/contact", data);
export const update_contact = (id, data) => api.put(`/contact/${id}`, data);
export const delete_contact = (id) => api.delete(`/contact/${id}`);
