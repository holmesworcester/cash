/* totalPayable = 210         // £2.10
cashPaid     = 300         // £3.00
dfference    =  90         // 90p
change       = [50,20,20]  // 50p, 20p, 20p 
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] */ 

var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    });
    it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);
})

	it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
})
	it('getChange(10000,20000) should equal [5000, 5000]', function(){
    assert.deepEqual(C.getChange(10000,20000), [5000, 5000]);
})
	it('getChange(0,3) should equal [2, 1]', function(){
    assert.deepEqual(C.getChange(0,3), [2,1]);
})
	it('getChange(0,1) should equal [1]', function(){
    assert.deepEqual(C.getChange(0,1), [1]);
})
	it('getChange(0,0) should equal []', function(){
    assert.deepEqual(C.getChange(0,0), []);
})
	it('getChange(100,200) should equal [100]', function(){
    assert.deepEqual(C.getChange(100,200), [100]);
})

	})
});

