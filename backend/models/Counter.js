const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },

    prefix: {
      type: String,
      required: true,
    },

    currentValue: {
      type: Number,
      default: 0,
    },

    padding: {
      type: Number,
      default: 6,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Counter", counterSchema);