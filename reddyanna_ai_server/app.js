const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 4001;
app.use(cors());
app.use(bodyParser.json());

app.use(express.json({ limit: "50mb" })); // Increase limit for JSON payload
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // Increase limit for URL-encoded data

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/build")));

// Sync Database
db.sequelize
  .sync()
  .then(() => console.log("Database connected and synced"))
  .catch((err) => console.error("Database sync failed:", err));

app.use("/", require("./routes/authRoutes.js"));
app.use("/", require("./routes/routes.js"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
