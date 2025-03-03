import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          username,
          password,
        }
      );
      setUsername("");
      setPassword("");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
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
            required
          />
          <input
            className="Admin-login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
