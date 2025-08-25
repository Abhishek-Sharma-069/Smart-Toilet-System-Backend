// Basic Sample controller
const Sample = require('../models/Sample');

exports.getSample = (req, res) => {
  const sample = new Sample('Hello from Model!');
  res.json({ message: sample.data });
};
