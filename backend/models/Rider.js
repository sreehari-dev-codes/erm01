const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
  name: String,
  status: String,
  location: String,
  lastUpdate: Date
});

module.exports = mongoose.model("Rider", riderSchema);
