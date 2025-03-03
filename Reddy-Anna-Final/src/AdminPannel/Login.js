import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AdminPannel/Styles.css";
import { login } from "../http/api";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/login",
        {
          // Using relative URL
          username,
          password,
        },
        {
          baseURL: `${process.env.REACT_APP_BASE_URL}`, // Setting base URL
          headers: {
            "Content-Type": "application/json", // Explicitly setting content type
          },
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login Successful!");
        setUsername(""); //
        setPassword("");
        navigate("/admin");
      } else {
        alert("Login failed! No token received.");
      }
    } catch (error) {
      alert("Invalid credentials or server error!");
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="Admin-login-container">
      <center>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="Admin-login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="Admin-login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Admin-login-btn" type="submit">
            Login
          </button>
        </form>
      </center>
    </div>
  );
};

export default Login;
