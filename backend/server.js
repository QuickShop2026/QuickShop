const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const brandRoutes = require("./routes/brandRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const counterRoutes = require("./routes/counterRoutes");



require("dotenv").config({
  path: "./atlas-credentials.env",
});

const productRoutes = require("./routes/productRoutes");

const app = express();

console.log("userRoutes =", userRoutes);
console.log("typeof userRoutes =", typeof userRoutes);

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
const PORT = process.env.PORT || 5000;

app.use("/api/brands", brandRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes); 
app.use("/api/orders", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/counters", counterRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

