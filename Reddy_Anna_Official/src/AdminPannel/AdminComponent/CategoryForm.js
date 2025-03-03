import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../AdminPannel/Styles/BlogerForm.css";

const CategoryForm = () => {
  // Dynamic category selection
  const [category, setCategory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/category`,
        { category },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setCategory("");
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <div className="blog-form-container">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Add Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit">Add Blog Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
