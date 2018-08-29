const mongoose = require("mongoose");

const herbDescriptionSchema = new mongoose.Schema({
  imgUrl: String,
  herbName: String,
  herbDescription: String,
  products: Array
});

const HerbDescriptionModel = mongoose.model(
  "herbdescription",
  herbDescriptionSchema
);

module.exports = HerbDescriptionModel;
