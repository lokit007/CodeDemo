// Event Loop Nodejs

// Khai bao Module Event
var events = require('events');

// Tạo Object Event Emitter
var eventEmitter = new events.EventEmitter();

// Tao Event Hander
var eventHander1 = function() {
    console.log("Event Hander 1");
    // Kich hoat event hander 2
    eventEmitter.emit("Hander2");
};
var eventHander2 = function() {
    console.log("Event Hander 2");
};

// Gan ket su kien
eventEmitter.on('Hander1', eventHander1);
eventEmitter.on('Hander2', eventHander2);
eventEmitter.on('Hander3', function() {
    console.log("Event Hander 3");
    eventEmitter.emit('Hander1');
});

// kich hoat event hander 3
eventEmitter.emit('Hander3');
