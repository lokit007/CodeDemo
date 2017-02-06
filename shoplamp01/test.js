var user = require("./models/Category.js");

var objUser = new user(1, "ten", "mo ta", "2017/02/04", 1);

console.log(objUser.showInfo());

console.log(new Date().toDateString() + "\n" + new Date().toLocaleDateString()+ "\n" + "\n" + new Date().toLocaleTimeString()+ "\n" + new Date().toTimeString()+ "\n" + new Date().toUTCString());