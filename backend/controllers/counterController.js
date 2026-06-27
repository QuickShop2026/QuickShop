const Counter = require("../models/Counter");

// Create Counter
const createCounter = async (req, res) => {
  try {
    const { name, prefix } = req.body;

    const exists = await Counter.findOne({ name });

    if (exists) {
      return res.status(400).json({
        message: "Counter already exists",
      });
    }

    const counter = await Counter.create({
      name,
      prefix,
    });

    res.status(201).json(counter);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Counters
const getCounters = async (req, res) => {
  try {

    const counters = await Counter.find();

    res.json(counters);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCounter,
  getCounters,
};