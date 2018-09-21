
var express = require ("express");

var router = express.Router();

var burger = require("../models/burger.js");

// create all our routes and set logic within those routes where required
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["name"], [req.body.burger_name], function(result){
    //send back the id of the new quote
    res.json({id: result.insertedId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updata ( 
        {
        burger_name: req.body.burger_name
    },
      condition,
      function(result){
          if(result.changedRows === 0){
              // if no rows were changed, then the id must not exist
              return res.status(404).end();
          }
          res.status(200).end();
      }
    );

});

module.exports = router;