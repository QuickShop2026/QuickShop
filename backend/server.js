const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const brandRoutes = require("./routes/brandRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

require("dotenv").config({
  path: "./atlas-credentials.env",
});

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("QuickShop Backend Running");
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running");
});

app.use("/api/brands", brandRoutes);
app.use("/api/categories", categoryRoutes);