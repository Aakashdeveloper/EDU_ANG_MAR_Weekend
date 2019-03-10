// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var nullable = typing.nullable;
var str = typing.str;
var int = typing.int;
var bool = typing.bool;
var func = typing.func;
var array = typing.array;
var tuple = typing.tuple;
var table = typing.table;

function test_nullable(i) {
    assert(typing(nullable(str), null), util.format('case %d.1 failed', i));
    assert(typing(nullable(int), null), util.format('case %d.2 failed', i));
    assert(typing(nullable(bool), null), util.format('case %d.3 failed', i));
    assert(typing(nullable(func), null), util.format('case %d.4 failed', i));
    assert(typing(nullable(array), null), util.format('case %d.6 failed', i));
    assert(typing(nullable(tuple(int, str)), null), util.format('case %d.7 failed', i));
    assert(typing(nullable(table(int(1,10), str(0,1))), null), util.format('case %d.8 failed', i));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_nullable;
