// Khoi tao buffer
var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30]);
var buf3 = new Buffer("Chuoi moi 111", "utf-8");

// ghi du lieu vao buffer
console.log("Length : ",buf1.write("1234567891011"));
console.log("Value : ", buf1.toString()); //ghi thua tu dong loai bo

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // Ket qua: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // Ket qua: abcde
console.log( buf.toString('utf8',0,5));    // Ket qua: abcde
console.log( buf.toString(undefined,0,5)); // Su dung ma hoa mac dinh 'utf8', Ket qua la: abcde

// Chuyen thanh JSON
var json = buf.toJSON();
console.log(json);

// Noi buffer
var buf4 = new Buffer("Chuoi hai", "utf-8");
var buf5 = Buffer.concat([buf3, buf4]);
console.log(buf5.toString());
// so sanh Nho hon < 0 > lon hon
console.log("So sanh : ", buf3.compare(buf4));
// sao chep copy data buf3 dua vao buf4
buf3.copy(buf4);
console.log("Sau copy 3 :", buf3.toString());
console.log("Sau copy 4 :", buf4.toString());
// Cat buffer
var buf6 = buf4.slice(1, buf4.length - 2);
console.log("Sau slice 4 :", buf4.toString());
console.log("Sau slice 6 :", buf6.toString());