// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var int = typing.int;

function test_int(i) {
    assert(!typing(int, null), util.format('case %d.1 failed', i));
    assert(!typing(int, 0.1), util.format('case %d.2 failed', i));
    assert(typing(int, 0.0), util.format('case %d.3 failed', i));
    assert(typing(int, 0), util.format('case %d.4 failed', i));
    assert(typing(int, 123), util.format('case %d.5 failed', i));
    assert(typing(int, -123), util.format('case %d.6 failed', i));
    assert(!typing(int(0,0), -1), util.format('case %d.7 failed', i));
    assert(typing(int(0,0), 0), util.format('case %d.8 failed', i));
    assert(!typing(int(0,0), 2), util.format('case %d.9 failed', i));
    assert(typing(int(0,10), 0), util.format('case %d.10 failed', i));
    assert(!typing(int(0,10), -1), util.format('case %d.11 failed', i));
    assert(typing(int(0,10), 10), util.format('case %d.12 failed', i));
    assert(!typing(int(0,10), 11), util.format('case %d.13 failed', i));
    assert(typing(int(-100,-10), -100), util.format('case %d.14 failed', i));
    assert(typing(int(-100,-10), -10), util.format('case %d.15 failed', i));
    assert(!typing(int(-100,-10), -101), util.format('case %d.16 failed', i));
    assert(!typing(int(-100,-10), -9), util.format('case %d.17 failed', i));
    assert(typing(int, 10000000000000000), util.format('case %d.18 failed', i));
    assert(typing(int, Math.pow(10,100)), util.format('case %d.19 failed', i));
    assert(typing(int, 1e8), util.format('case %d.20 failed', i));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_int;
