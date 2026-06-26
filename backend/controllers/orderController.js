const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      shippingAddress,
      totalAmount,
      paymentMethod,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const order = await Order.create({
      user,
      items,
      shippingAddress,
      totalAmount,
      paymentMethod,
    });

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
};