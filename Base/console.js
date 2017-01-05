var fs = require("fs");
console.info("Bat dau chuong trinh!");
var counter = 10;
console.log("Counter: %d", counter);
console.time("Read File Data");
// Thuc hien mot so phuong thuc de lay du lieu tai day ...
fs.readFileSync("./Sources/input.txt");
// Khong anh huong den ket qua
setTimeout(function(){
    console.log("Delay 2s");
}, 2000);
console.timeEnd("Read File Data");
console.info("Ket thuc chuong trinh!");