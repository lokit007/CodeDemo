//var user = require("./models/User.js");
//var admin = require("./models/Admin.js");

//var obj = new model.User();

//var objUser = new user();
//var objAdmin = new admin();

//console.log(objUser.getInfo());
//console.log(objAdmin.getInfo());
//console.log(objAdmin.getName());

var http = require("http");
var express = require("express");
var socket = require("socket.io");
var mysql = require("mysql");

// Define
var app = express();
var post = process.env.post || 3000;
var pool = mysql.createPool({
    connectionLimit: 5,
    connectTimeout: 5000,
    host: "localhost",
    user: "root",
    password: null,
    database: "shoplampdb"
});

// Config
app.set("view engine", "ejs");
app.set("views", "./views/admin");
app.use(express.static("public"));
var server = http.Server(app);
var io = socket(server);

// Listen event
server.listen(post, function () {
   console.log("Server is runing ..."); 
});
// Routes
app.get("/admin", function(req, res){
    res.render("login");
});
