const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  type: String, // image or video
  url: String,
});

module.exports = mongoose.model("Project", projectSchema);