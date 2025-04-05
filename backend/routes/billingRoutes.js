const express = require("express");
const router = express.Router();
const { getAllBillings, createBilling } = require("../controllers/billingController");

router.get("/", getAllBillings);
router.post("/", createBilling);

module.exports = router;
