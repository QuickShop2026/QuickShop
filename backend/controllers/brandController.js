const Brand = require("../models/Brand");
const slugify = require("slugify");
const { generateNumber } = require("../services/counterService");

const createBrand = async (req, res) => {
  try {

    const exists = await Brand.findOne({
      name: req.body.name,
      isDeleted: false,
    });

    if (exists) {
      return res.status(400).json({
        message: "Brand already exists",
      });
    }

    const brandCode = await generateNumber("BRAND");

    const brand = await Brand.create({
      ...req.body,
      brandCode,
      slug: slugify(req.body.name, {
        lower: true,
        strict: true,
      }),
    });

    res.status(201).json(brand);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getBrands = async (req, res) => {

  try {

    const brands = await Brand.find({
      isDeleted: false,
    }).sort({
      displayOrder: 1,
      name: 1,
    });

    res.json(brands);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const getBrand = async (req, res) => {

  try {

    const brand = await Brand.findById(req.params.id);

    if (!brand) {

      return res.status(404).json({
        message: "Brand not found",
      });

    }

    res.json(brand);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const updateBrand = async (req, res) => {

  try {

    const brand = await Brand.findById(req.params.id);

    if (!brand) {

      return res.status(404).json({
        message: "Brand not found",
      });

    }

    const updatedBrand = await Brand.findByIdAndUpdate(
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

    res.json(updatedBrand);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const deleteBrand = async (req, res) => {

  try {

    await Brand.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
      status: "Inactive",
    });

    res.json({
      message: "Brand deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};