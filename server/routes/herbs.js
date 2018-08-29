var express = require("express");
var router = express.Router();

const HerbDescriptionModel = require("../models/HerbDescription.model");
const HerbsListModel = require("../models/HerbsList.model");

/* GET herb info */
router.get("/herbInfo/:herbName", async function(req, res, next) {
  let resJson = await HerbDescriptionModel.findOne({
    herbUrlName: req.params.herbName
  });
  res.json(resJson);
});

router.get("/herbsList", async function(req, res, next) {
  let resArray = await HerbsListModel.find({});
  res.send(resArray);
});

/* router.get("/*", function(req, res, next) {
  console.log(req);
}); */

module.exports = router;
