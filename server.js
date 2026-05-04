const express = require("express");
const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("FEYA backend is running 🚀");
});

// IMPORTANT: bind to 0.0.0.0 for Render
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
