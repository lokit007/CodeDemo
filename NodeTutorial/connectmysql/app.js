// Module
var express = require("express");
var mysql = require("mysql");

var post = 3307;
var app = express();
var pool = mysql.createPool({
    connectionLimit: 5,
    connectTimeout: 5000,
    host: "db4free.net:3307/dbappone",
    user: "lokit007",
    password: 'nhanviet1',
    database: "dbappone"
});

app.listen(post, function(){
    console.log("Server is runing http://localhost:%s", post);
});

// Routes
app.get("/", function(req, res){
    var sql = "SELECT * FROM `category`"; // Thực hiện câu truy vấn và show dữ liệu
    pool.query(sql, function(error, result){
        if (error) throw error;
        console.log("– category TABLE — " , result);
        res.json(result); // Trả kết quả về cho client dưới dạng json
    });
});
