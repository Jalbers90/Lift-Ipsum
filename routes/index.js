var express = require("express"),
    router = express.Router(),
    loremIpsum = require("../models/loremIpsum.js");
    
    
router.get("/", function(req, res) {
    var text = loremIpsum.generate(3);
    res.render("index", {text : text});
});


router.get("/generate", function(req, res) {
    res.render("generate");
});

router.post("/generate", function(req, res) {
    
    var num = req.body.numOfParagraphs;
    var text = loremIpsum.generate(num);
    res.render("generate", {text : text});
});

module.exports = router;