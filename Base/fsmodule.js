var fs = require("fs");

// Doc file khong dong bo
fs.readFile("./Sources/input.txt", function(err, data){
    if (err) console.log(err.stack);
    else console.log("Du lieu khong dong bo :\n", data.toString());
});

// Doc file dong bo
var data = fs.readFileSync("./Sources/output.txt", "utf-8");
console.log("Du lieu dong bo : \n", data.toString());
console.log("\n============= Ket thuc chuong trinh.================\n");

// Lấy thông tin file
fs.stat("./Sources/input.txt", function(err, stats){
    if (err) console.log(err.stack);
    else {
        console.log("==========\nThong tin file\n",stats);
        // Kiem tra kieu file
        console.log("isFile ? " + stats.isFile());
        console.log("isDirectory ? " + stats.isDirectory());
    }
});
// Open file
fs.open("./Sources/output2.txt", "r+", function(err, fd){
    if (err) console.log(err.stack);
    else console.log("Mo file thanh cong.");
});

//fs.close : dong file da mo
//fs.ftruncate :  trumcate lai file da mo
//fs.unlink : xoa file
//fs.mkdir : tao thu muc
//fs.readdir : doc thu muc
//fs.rmdir : xoa thu muc

