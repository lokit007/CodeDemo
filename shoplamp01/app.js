// Module
var express = require("express");
var mysql = require("mysql");

var post = process.env.post || 3000;
var app = express();
var pool = mysql.createPool({
    connectionLimit: 5,
    connectTimeout: 5000,
    host: "localhost",
    user: "root",
    password: null,
    database: "shoplampdb"
});


app.listen(post, function(){
    console.log("Server is runing http://localhost:%s", post);
});

// Routes
app.get("/", function(req, res){
    var sql = "SELECT * FROM `user`"; // Thực hiện câu truy vấn và show dữ liệu
    pool.query(sql, function(error, result){
        if (error) throw error;
        console.log("– USER TABLE — " , result);
        res.json(result); // Trả kết quả về cho client dưới dạng json
    });
});
