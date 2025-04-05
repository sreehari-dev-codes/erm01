const mongoose = require("mongoose");

const yearlyReportSchema = new mongoose.Schema({
  year: String,
  entity: String,
  type: String,
  monthlyData: [Number],
  total: Number
});

module.exports = mongoose.model("YearlyReport", yearlyReportSchema);
