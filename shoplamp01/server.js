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
var session = require('express-session')
var socket = require("socket.io");
var mysql = require("mysql");
var bodyParser = require("body-parser");

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'Session module',
  resave: false,
  saveUninitialized: true
}));

var server = http.Server(app);
var io = socket(server);

// Listen event
server.listen(post, function () {
   console.log("Server is runing ..."); 
});

// Routes
var admin = require("./routes/admin/admin")(app, pool);
