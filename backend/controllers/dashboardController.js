const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

const getDashboardData = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const totalCustomers = await User.countDocuments({
      role: "user",
    });

    const pendingOrders = await Order.countDocuments({
      orderStatus: "Pending",
    });

    const orders = await Order.find();

    const totalRevenue = orders.reduce(
      (total, order) => total + order.totalAmount,
      0
    );

    res.json({
      totalProducts,
      totalOrders,
      totalCustomers,
      pendingOrders,
      totalRevenue,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
};