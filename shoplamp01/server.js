var user = require("./models/User.js");
var admin = require("./models/Admin.js");

var obj = new model.User();

var objUser = new user();
var objAdmin = new admin();

console.log(objUser.getInfo());
console.log(objAdmin.getInfo());
console.log(objAdmin.getName());
