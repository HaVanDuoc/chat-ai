const express = require("express");
const app = express();
require("dotenv").config();

// Middleware để parse JSON
app.use(express.json());

const port = process.env.PORT || 3001;

// Định nghĩa route đơn giản
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
