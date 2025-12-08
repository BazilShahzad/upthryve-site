// Basic Node.js + Express server

const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("UpThryve Backend is running 🚀");
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "API working OK!" });
});

// Run server locally
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
