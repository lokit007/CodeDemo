var fs = require("fs");
var data = "du lieu cu";

// Tao readeble stream
var readerStream = fs.createReadStream("./Sources/input.txt");
// Tao writeble stream
var writerStream = fs.createWriteStream("./Sources/output.txt");
var writerStream2 = fs.createWriteStream("./Sources/output2.txt");

// Thiet lap Encoding
readerStream.setEncoding("utf-8");

// Xu ly cac su kien lien quan den stream
// Read
readerStream.on("data", function(dataResult){
    data += dataResult;
    console.log("Xu ly read data event");
});
readerStream.on("end", function(){
    console.log("Du lieu doc duoc\n", data);
    // Ghi file sau khi doc xong
    writerStream.write(data, "utf-8");
    // Ket thuc ghi
    writerStream.end();
});
readerStream.on("error", function(err){
    console.log("Loi Read : ", err.stack);
});
// Write
writerStream.on("error", function(err){
    console.log("Loi Write : ", err.stack);
});
writerStream.on("finish", function(){
    console.log("Da ghi xong du lieu. Ket thuc");
});
// Ghi file (song song voi doc nen du lieu nhieu khi chua co)
//writerStream.write(data, "utf-8");
// Ket thuc ghi
//writerStream.end();

// dùng Piping trong Stream de giai quyet van de nay
readerStream.pipe(writerStream2);