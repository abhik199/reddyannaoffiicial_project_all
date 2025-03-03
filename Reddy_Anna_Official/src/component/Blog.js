import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs("All Posts"); // Fetch all blogs initially
    fetchCategories();
  }, []);

  const fetchBlogs = (category) => {
    let url = `${process.env.REACT_APP_BASE_URL}/blogs`;
    if (category !== "All Posts") {
      const selectedCat = categories.find((cat) => cat.category === category);
      if (selectedCat) {
        url = `${process.env.REACT_APP_BASE_URL}/category/${selectedCat.id}`;
      }
    }

    axios
      .get(url)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  const fetchCategories = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/category`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    fetchBlogs(category);
    setShowDropdown(false); // Close dropdown after selection
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const calculateTimeAgo = (date) => {
    const now = new Date();
    const pastDate = new Date(date);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }
  };

  return (
    <div className="blog-container">
      {/* Navigation Menu */}
      <nav className="blog-menu">
        <ul>
          <li>
            <button
              onClick={() => handleFilter("All Posts")}
              className={selectedCategory === "All Posts" ? "active" : ""}
            >
              All Posts
            </button>
          </li>

          {/* Show First 5 Categories */}
          {categories.slice(0, 5).map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => handleFilter(cat.category)}
                className={selectedCategory === cat.category ? "active" : ""}
              >
                {cat.category}
              </button>
            </li>
          ))}

          {/* Dropdown for Remaining Categories */}
          {categories.length > 5 && (
            <li className="dropdown">
              <button onClick={() => setShowDropdown(!showDropdown)}>
                More ▼
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  {categories.slice(5).map((cat) => (
                    <li key={cat.id} className="dropdown-item">
                      <button
                        onClick={() => handleFilter(cat.category)}
                        className={
                          selectedCategory === cat.category ? "active" : ""
                        }
                      >
                        {cat.category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>

      {/* Blogs */}
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-match-card"
          // onClick={() => handleBlogClick(blog.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="blog-match-card-image">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/blog/${blog.blog_img}`}
              alt={blog.blog_title}
              style={{ borderRadius: "8px" }}
            />

            <div className="date-tag">{new Date(blog.date).toDateString()}</div>
          </div>
          <div className="blog-match-card-content">
            <h2 className="blog-card-heading">
              {blog.blog_title.substring(0, 50)}...
            </h2>
            <p className="blog-card-paragraph">
              {blog.description.substring(0, 150)}...
            </p>
            <div className="blog-user-info">
              <span className="blog-user-name">Yup Thomi</span>
              <span className="blog-time-ago">
                {calculateTimeAgo(blog.date)}
              </span>
              <span className="blog-read-text">read</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
