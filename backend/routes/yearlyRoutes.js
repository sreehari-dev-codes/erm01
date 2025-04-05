const express = require("express");
const router = express.Router();
const { getAllReports, createReport } = require("../controllers/yearlyReportController");

router.get("/", getAllReports);
router.post("/", createReport);

module.exports = router;
