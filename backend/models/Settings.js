const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },

    ownerName: String,

    mobile: String,

    alternateMobile: String,

    email: String,

    address: String,

    city: String,

    state: String,

    pincode: String,

    gstNumber: String,

    panNumber: String,

    logo: String,

    currency: {
      type: String,
      default: "INR",
    },

    financialYear: {
      type: String,
      default: "2026-27",
    },

    invoicePrefix: {
      type: String,
      default: "INV",
    },

    purchasePrefix: {
      type: String,
      default: "PUR",
    },

    productPrefix: {
      type: String,
      default: "PRD",
    },

    customerPrefix: {
      type: String,
      default: "CUS",
    },

    supplierPrefix: {
      type: String,
      default: "SUP",
    },

    defaultGST: {
      type: Number,
      default: 18,
    },

    paymentModes: [
      {
        type: String,
      },
    ],

    financeCompanies: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Settings",
  settingsSchema
);