const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/index"); // Import Sequelize model
require("dotenv").config();

const auth_router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

// 📌 Admin Registration (One-Time Use)
auth_router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ where: { username } });
    if (existingAdmin)
      return res.status(400).json({ error: "Admin already exists" });

    // Hash password before storing
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newAdmin = await Admin.create({ username, password: hashedPassword });

    res
      .status(201)
      .json({ message: "Admin registered successfully", admin: newAdmin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});

// 📌 Admin Login
auth_router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ where: { username } });

    if (!admin) return res.status(400).json({ error: "Invalid credentials" });

    console.log("Stored Hashed Password:", admin.password);
    console.log("Entered Password:", password);

    // Validate password (fix parameter order)
    const isMatch = await bcrypt.compare(password, admin.password); // ✅ Correct order

    console.log("Password Match:", isMatch);

    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate JWT Token
    const token = jwt.sign({ id: admin.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// 📌 Admin Protected Route Example
auth_router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "You are authorized", user: req.user });
});

// Middleware to Verify Token
function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
}

module.exports = auth_router;
