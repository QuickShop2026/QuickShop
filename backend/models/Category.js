const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryCode: {
      type: String,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      trim: true,
    },

    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },

    image: {
      type: String,
      default: "",
    },

    banner: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    displayOrder: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    notes: {
      type: String,
      default: "",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);