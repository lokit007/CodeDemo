// Module
var http = require("http");
var express = require("express");
var socket = require("socket.io");
// Define
var app = express();
// Config
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
var server = http.Server(app);
var io = socket(server);

// Listen event
server.listen(3000, function () {
   console.log("Server is runing ..."); 
});
// Routes
app.get("/", function(req, res){
    res.render("clientchat");
});
// Xu ly
var lsUsers = [];
// lang nghe ket noi
io.on("connection", function(sk) {
    console.log("User %s dang ket noi ...", sk.id);
    // lang nghe cac event tu dinh nghia
    sk.on("listen-client", function(data){
        console.log("Client gui : ", data);
        sk.emit("server-chao", "Chuc mung ket noi thanh cong");
    });
});