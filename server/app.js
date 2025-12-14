const express = require("express");
const path = require("path");
const app = express();


// Middlewares
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Optional: make "/" explicitly serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "API working OK!" });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});