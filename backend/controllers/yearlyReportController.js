const YearlyReport = require("../models/YearlyReport");

exports.getAllReports = async (req, res) => {
  const reports = await YearlyReport.find();
  res.json(reports);
};

exports.createReport = async (req, res) => {
  const report = new YearlyReport(req.body);
  const saved = await report.save();
  res.json(saved);
};
