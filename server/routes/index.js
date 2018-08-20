var express = require("express");
var router = express.Router();

/* GET herb info */
router.get("/getHerbInfo/:herbName", function(req, res, next) {
  let resJson = {
    imgUrl: "/images/marigold-edit.jpg",
    herbName: "Neven",
    herbDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere earum aliquid, sit excepturi quos. Expedita optio fugit ipsam quae harum saepe nisi! Nam provident, eaque ullam eos commodi rerum!",
    products: ["Krema", "Tinktura", "Etcetera"]
  };
  res.json(resJson);
});

/* router.get("/*", function(req, res, next) {
  console.log(req);
}); */

module.exports = router;
