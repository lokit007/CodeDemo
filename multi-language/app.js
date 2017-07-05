var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
// Cấu hình
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// i18n : Đa ngôn ngữ
var i18n = require("i18n");
i18n.configure({
    locales:['vi', 'en'],
    register: global,
    fallbacks:{'vi': 'en'},
    cookie: 'language',
    defaultLocale: 'en',
    queryParameter: 'lang',
    autoReload: true,
    updateFiles: true,
    syncFiles: true,
    directory: __dirname + '/languages',
    api: {
      '__': '__',
      '__n': '__n'
    },
    preserveLegacyCase: true
});
app.use(i18n.init);
app.use(function(req, res, next){
    if(req.query.lang) i18n.setLocale(req.query.lang);
    res.locals.clanguage = req.getLocale();
    res.locals.languages = i18n.getLocales();
    next();
});
// Mail : Gửi, Kiểm tra tồn tại, Nhận mail
var nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true, // secure:true for port 465, secure:false for port 587
    service: 'gmail',
    auth: {
        user: 'doihamhieu@gmail.com',
        pass: 'nhanviet1'
    }
});
// setup email data with unicode symbols
let mailOptions = {
    from: '"NhanViet" <doihamhieu@gmail.com>', // sender address
    to: 'it007bk@gmail.com', // list of receivers
    subject: 'Demo mail localhost', // Subject line
    text: 'Nội dung test', // plain text body
    html: '<b>Nội dung html</b>' // html body
};
var emailCheck = require('email-check');
// MD5
var md5 = require('md5');
console.log(md5('message'));
// Lắng nghe
app.listen(3000, function(){
    console.log("Website demo : http://localhost:3000");
});
// Route
app.get("/", function(req, res, next){
    console.log(__('wellcome'));
    console.log(__n('%d member', 1));
    console.log(__n('%d member', 5));
    res.render('home');
});
// Send Email
app.get("/sendemail", function(req, res, next){
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("Error : " + error);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.send("Thành công" + info.response);
        }
    });
});
// Check Email Exists
app.get("/checkemail", function(req, res, next){
    emailCheck('it007bk@gmail.com')
    .then(function (result) {
        // Returns "true" if the email address exists, "false" if it doesn't. 
        console.log(result);
    })
    .catch(function (err) {
        if (err.message === 'refuse') {
        // The MX server is refusing requests from your IP address. 
        console.log(err);
        } else {
        // Decide what to do with other errors. 
        console.log(err);
        }
    });
});
