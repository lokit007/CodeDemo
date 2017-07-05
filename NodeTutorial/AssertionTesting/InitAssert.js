const assert = require('assert');

// init assert(value[, message]) 
// assert(true); //OK
// assert(true, 'it\'s true'); //OK
// assert(1); //OK
// assert(1, 'it\'s true'); //OK
assert(2, 'it\'s true'); //OK
// assert(false); //AssertionError: false == true
// assert(0); //AssertionError: 0 == true
// assert(false, 'it\'s false'); //AssertionError: it's false

// So sanh 2 obj, neu khong = nhau xuat message
// assert.deepEqual(actual, expected[, message])
// WARNING: This does not throw an AssertionError!
assert.deepEqual(Error('a'), Error('b'));
const obj1 = {
  a : {
    b : 1
  }
};
const obj2 = {
  a : {
    b : 2
  }
};
const obj3 = {
  a : {
    b : 1
  }
};
const obj4 = Object.create(obj1);
assert.deepEqual(obj1, obj1);
// OK, object is equal to itself
// assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// values of b are different
// assert.deepEqual(obj1, obj3);
// OK, objects are equal
// assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
// Prototypes are ignored