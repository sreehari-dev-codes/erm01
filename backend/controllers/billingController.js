const Billing = require("../models/Billing");

exports.getAllBillings = async (req, res) => {
  const bills = await Billing.find();
  res.json(bills);
};

exports.createBilling = async (req, res) => {
  const billing = new Billing(req.body);
  const saved = await billing.save();
  res.json(saved);
};
