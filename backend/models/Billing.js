const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  clientName: String,
  amount: Number,
  date: Date,
  details: String
});

module.exports = mongoose.model("Billing", billingSchema);
