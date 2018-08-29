const mongoose = require("mongoose");

const herbsListSchema = new mongoose.Schema({
  herbName: String,
  herbUrlName: String,
  bgImg: String,
  linkId: String,
  linkHoverColor: String,
  herbTagLine: String
});

const HerbsListModel = mongoose.model("herb", herbsListSchema);

module.exports = HerbsListModel;
