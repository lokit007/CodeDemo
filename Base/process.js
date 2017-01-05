//exit : Sự kiện xảy ra khi process chuẩn bị thoát. Không có cách nào để ngăn cản nó
//beforeExit : Sự kiện này xảy ra khi Node.js làm trống Event Loop và không còn cái gì khác để schedule nữa.
//uncaughtException : Sự kiện xảy ra khi xuất hiện một exception và không được bắt. Nếu một Listener được thêm vào exception này thì hành động mặc định sẽ không xảy ra
//Signal Events : Sự kiện xảy ra khi process nhận một tín hiệu giống như SIGINT, SIGHUP, ...
process.on("exit", function(code){
    setTimeout(function(){
        console.log("hander nay se khong duoc thuc hien");
    }, 0);
    console.log("Chuan bi thoat chuong trinh ", code);
});
process.on("beforeExit", function(){
    setTimeout(function(){
        console.log("hander nay se duoc thuc hien mai cho den khi tat server");
    }, 1000);
});
console.log("Ket thuc chuong trinh");
// In ket qua tren man hinh Console
process.stdout.write("Hello World!" + "\n");
// Doc cac tham so da truyen
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});
// Lay duong truyen
console.log(process.execPath);
// Lay thong tin ve Platform 
console.log(process.platform);
// In thu muc lam viec hien tai
console.log('Thu muc lam viec hien tai: ' + process.cwd());
// In thong tin ve process version
console.log('Phien ban hien tai: ' + process.version);
// In thong tin ve memory usage
console.log(process.memoryUsage());
