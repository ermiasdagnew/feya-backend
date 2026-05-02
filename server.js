const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("FEYA backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
