const Rider = require("../models/Rider");

exports.getAllRiders = async (req, res) => {
  const riders = await Rider.find();
  res.json(riders);
};

exports.createRider = async (req, res) => {
  const rider = new Rider(req.body);
  const saved = await rider.save();
  res.json(saved);
};
