import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/BlogTable.css";

const BlogTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5); // Adjust as needed

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]); // Fetch blogs when currentPage changes

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blogs?page=${currentPage}&limit=${blogsPerPage}`
      );
      const formattedBlogs = response.data.map((blog) => ({
        ...blog,
        date: formatDate(blog.date),
      }));
      setBlogs(formattedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/blog/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="blog-table-container">
      <h2>Blog Posts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBlogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.blog_title.substring(0, 15)}...</td>
              <td>{blog.description.substring(0, 30)}...</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/blog/${blog.blog_img}`}
                  alt={blog.blog_title}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td>{blog.date}</td>
              <td>{blog.Category?.category}</td>
              <td>
                <button onClick={() => handleDeleteBlog(blog.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default BlogTable;
