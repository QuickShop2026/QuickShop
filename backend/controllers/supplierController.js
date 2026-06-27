const Supplier = require("../models/Supplier");
const slugify = require("slugify");
const { generateNumber } = require("../services/counterService");

const createSupplier = async (req, res) => {
  try {

    const exists = await Supplier.findOne({
      businessName: {
        $regex: new RegExp(`^${req.body.businessName}$`, "i"),
      },
      isDeleted: false,
    });

    if (exists) {
      return res.status(400).json({
        message: "Supplier already exists",
      });
    }

    const supplierCode = await generateNumber("SUPPLIER");

    const supplier = await Supplier.create({
      ...req.body,
      supplierCode,
      slug: slugify(req.body.businessName, {
        lower: true,
        strict: true,
      }),
    });

    res.status(201).json(supplier);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getSuppliers = async (req, res) => {

  try {

    const suppliers = await Supplier.find({
      isDeleted: false,
    }).sort({
      businessName: 1,
    });

    res.json(suppliers);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const getSupplier = async (req, res) => {

  try {

    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
      return res.status(404).json({
        message: "Supplier not found",
      });
    }

    res.json(supplier);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const updateSupplier = async (req, res) => {

  try {

    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
      return res.status(404).json({
        message: "Supplier not found",
      });
    }

    const updated = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        slug: slugify(req.body.businessName, {
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

const deleteSupplier = async (req, res) => {

  try {

    await Supplier.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
      status: "Inactive",
    });

    res.json({
      message: "Supplier deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};