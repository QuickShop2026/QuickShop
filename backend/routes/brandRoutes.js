const express = require("express");
const router = express.Router();

const Brand = require("../models/Brand");

console.log(require.resolve("../models/Brand"));
console.log(Brand);


// Add Brand
router.post("/add", async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/seed", async (req, res) => {
  await Brand.insertMany([
    { name: "Samsung" },
    { name: "Vivo" },
    { name: "Oppo" },
    { name: "Realme" },
    { name: "OnePlus" },
    { name: "Apple" }
  ]);

  res.send("Brands Added");
});

// Get All Brands
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().sort({
      name: 1,
    });

    res.json(brands);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;