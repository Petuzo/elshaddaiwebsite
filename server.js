const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files correctly from 'public' directory
app.use(express.static(path.join(__dirname, "elshaddaischool", "public")));

// Serve index.html as the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "elshaddaischool", "index.html"));
});

// Handle 404 errors for missing files
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
