import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../AdminPannel/Styles/BlogerForm.css";

const BlogForm = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogImg, setBlogImg] = useState(null);
  const [categoryId, setCategoryId] = useState(""); // Dynamic category selection
  const [categories, setCategories] = useState([]); // Store categories
  const [blogs, setBlogs] = useState([]);

  // Fetch categories dynamically
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/category`)
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setCategoryId(response.data[0].id); // Set default category
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch blogs
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/Blog`)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("blog_title", blogTitle);
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    if (blogImg) {
      formData.append("blog_img", blogImg); // Append image file
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/Blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      setBlogs([...blogs, response.data]);
      setBlogTitle("");
      setDescription("");
      setBlogImg(null);
      setCategoryId(categories.length > 0 ? categories[0].id : ""); // Reset to first category
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <div className="blog-form-container">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBlogImg(e.target.files[0])}
          required
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          ))}
        </select>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
