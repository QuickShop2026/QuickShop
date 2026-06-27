const Counter = require("../models/Counter");

const generateNumber = async (name) => {

  const counter = await Counter.findOneAndUpdate(
    { name },
    { $inc: { currentValue: 1 } },
    { new: true }
  );

  if (!counter) {
    throw new Error(`${name} Counter Not Found`);
  }

  const number = String(counter.currentValue)
    .padStart(counter.padding, "0");

  return `${counter.prefix}-${number}`;
};

module.exports = {
  generateNumber,
};