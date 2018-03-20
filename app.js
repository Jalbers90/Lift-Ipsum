// require packages, set express object to app variable
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
    
// require routes
var indexRoutes = require("./routes/index.js");
    

//initial packages and public folder    
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(indexRoutes);





//Server start and listen
app.listen(process.env.PORT,process.env.IP, function() {
    console.log("LIFTING IPSUM IS LISTENING");
});


        