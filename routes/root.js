const express = require("express");

const router = express.Router();

const middleman = function(req, res, next){
    console.log("Was hit by request");
    next();
}

router.get("/", function(req, res){
    res.json({
        "data": "My name is Jose"
    });
});

router.get("/custom", middleman, function(req, res){
    res.send("<p>This is the custom route</p>");
});

router.post("/", function(req, res){
    console.log(req.body);
    res.end();
});


module.exports = router;