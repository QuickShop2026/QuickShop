const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add Product
router.post("/add", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update Product in DataBase

router.put("/:id", async (req, res) => {
  try {
    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/add-test", async (req, res) => {
  try {
    const product = await Product.create({
      name: "Samsung S25",
      price: 74999,
      category: "Mobiles",
      stock: 10,
      description: "256GB Variant"
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/delete-all", async (req, res) => {
  await Product.deleteMany({});
  
  res.json({
    message: "All Products Deleted"
  });
});
//Get Product by ID

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product =
      await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;