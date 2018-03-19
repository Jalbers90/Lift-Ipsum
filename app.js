// require packages, set express object to app variable
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    loremIpsum = require("./models/loremIpsum.js");
    


//initial packages and public folder    
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
    var text = loremIpsum.generate(3);
    res.render("index", {text : text});
});


app.get("/generate", function(req, res) {
    res.render("generate");
});

app.post("/generate", function(req, res) {
    
    var num = req.body.numOfParagraphs;
    var text = loremIpsum.generate(num);
    res.render("generate", {text : text});
});



//Server start and listen
app.listen(process.env.PORT,process.env.IP, function() {
    console.log("LIFTING IPSUM IS LISTENING");
});


        