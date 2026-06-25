const mongoose = require("mongoose");

console.log("Brand model loaded");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

console.log("Brand model created =", Brand);

module.exports = Brand;