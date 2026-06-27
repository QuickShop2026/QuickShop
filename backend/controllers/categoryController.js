const Category = require("../models/Category");
const slugify = require("slugify");
const { generateNumber } = require("../services/counterService");

const createCategory = async (req, res) => {
  try {

    const exists = await Category.findOne({
      name: {
        $regex: new RegExp(`^${req.body.name}$`, "i"),
      },
      isDeleted: false,
    });

    if (exists) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }

    const categoryCode = await generateNumber("CATEGORY");

    const category = await Category.create({
      ...req.body,
      categoryCode,
      slug: slugify(req.body.name, {
        lower: true,
        strict: true,
      }),
    });

    res.status(201).json(category);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getCategories = async (req, res) => {

  try {

    const categories = await Category.find({
      isDeleted: false,
    })
      .populate("parentCategory", "name")
      .sort({
        displayOrder: 1,
        name: 1,
      });

    res.json(categories);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const getCategory = async (req, res) => {

  try {

    const category = await Category.findById(req.params.id)
      .populate("parentCategory", "name");

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json(category);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const updateCategory = async (req, res) => {

  try {

    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        slug: slugify(req.body.name, {
          lower: true,
          strict: true,
        }),
      },
      {
        new: true,
      }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const deleteCategory = async (req, res) => {

  try {

    await Category.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
      status: "Inactive",
    });

    res.json({
      message: "Category deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};