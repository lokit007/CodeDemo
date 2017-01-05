// Cac bien Global trong nodejs
// Path file cua doan code dang thuc thi
console.log("Path : ", __filename);
console.log("Path Dir : ", __dirname);
// Thiet lap timeout cho hander
var objTimeOut = setTimeout(function(){
    console.log("Code xu ly sau 2s.");
}, 2000);
// xoa timeout da thiet lap
clearTimeout(objTimeOut);

// Thiet lap interval cho hander
var objInterval = setInterval(function(){
    console.log("Code xu ly lap lai sau 2s.");
}, 2000);
// xoa interval da thiet lap
clearInterval(objInterval);
