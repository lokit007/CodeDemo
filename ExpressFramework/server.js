// express : Express là một framework nhỏ và tiện ích để xây dựng các ứng dụng web, cung cấp một lượng lớn của tính năng mạnh mẽ để phát triển các ứng dụng web và mobile.
// body-parser : Đây là một lớp trung gian node.js để xử lí JSON, dự liệu thô, text và mã hóa URL.
// cookie-parser : Chuyển đổi header của Cookie và phân bố đến các req.cookies
// multer : Đây là một thành phần trung gian trong node.js để xử lí phần multipart/form-data.
// ejs : Đây là module hổ trợ việc thiết kế render file html
// npm install express ejs body-parser cookie-parser multer --save

// Khai bao su dung module
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// Tao mot parser co dang application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Cau hinh file static
app.use(express.static("public"));

// Set routes
// Phuong thuc get() phan hoi mot GET Request ve Homepage
app.get('/', function (req, res) {
   console.log("Nhan mot GET Request ve Homepage");
   res.send('Hello GET');
});
// Phuong thuc post() phan hoi mot POST Request ve Homepage
app.post('/', function (req, res) {
   console.log("Nhan mot POST Request ve Homepage");
   res.send('Hello POST');
});
// Phuong thuc delete() phan hoi mot DELETE Request ve /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Nhan mot DELETE Request ve /del_user");
   res.send('Hello DELETE');
});
// Phuong thuc nay phan hoi mot GET Request ve /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Nhan mot GET Request ve /list_user");
   res.send('Page Listing');
});
// Phuong thuc nay phan hoi mot GET Request ve abcd, abxcd, ab123cd, ...
app.get('/ab*cd', function(req, res) {   
   console.log("Nhan mot GET request ve /ab*cd");
   res.send('Page Pattern Match');
});
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/index2.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index2.html" );
})
app.get('/process_get', function (req, res) {
   // Chuan bi output trong dinh dang JSON
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
app.post('/process_post', urlencodedParser, function (req, res) {
   // Chuan bi output trong dinh dang JSON
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
// Setting host
var post = process.env.host | 3000;
var server = app.listen(post, function(){
    var host = server.address().address;
    console.log("Server is runing : http://localhost:%s", post);
});
