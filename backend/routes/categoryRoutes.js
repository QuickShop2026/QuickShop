const express = require("express");
const router = express.Router();

const Category = require("../models/Category");

console.log("CATEGORY =", Category);
console.log("TYPE =", typeof Category);


// Add Category
router.post("/add", async (req, res) => {
  try {
    const category = await Category.create(
      req.body
    );

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/seed", async (req, res) => {
  await Category.insertMany([
    { name: "Mobiles" },
    { name: "Accessories" },
    { name: "Earbuds" },
    { name: "Chargers" },
    { name: "Smart Watch" }
  ]);

  res.send("Categories Added");
});

// Get All Categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({
      name: 1,
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;