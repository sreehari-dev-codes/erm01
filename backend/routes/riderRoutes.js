const express = require("express");
const router = express.Router();
const { getAllRiders, createRider } = require("../controllers/riderController");

router.get("/", getAllRiders);
router.post("/", createRider);

module.exports = router;
