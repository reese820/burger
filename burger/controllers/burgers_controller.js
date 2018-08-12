const express = require("express");
const burgers = require("../models/burgers.js");
const router = express.Router();

router.get("/", function(req, res) {
  burgers.all(function(data) {
    let handlebarsObj = {
      burgers: data
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);
  burgers.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;
