var app = require("express")();
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.use(cookieParser());
app.use(session({
    secret: "anystring",
    saveUninitialized: true,
    resave: true
}));

app.listen(3000, function(){
    console.log("Sever is runing ...");
});

app.get("/", function(req, res){
    console.log("cookie\n", req.cookies);
    console.log("========================\nsession\n", req.session);
    res.send("Data : " + req.session.name);
});

app.get("/create", function(req, res){
    if (req.session.name) {
        req.session.name = "True";
        res.send("Data : " + req.session.name);
    } else {
        req.session.name = "False";
        res.send("Data : " + req.session.name);
    }
    
});