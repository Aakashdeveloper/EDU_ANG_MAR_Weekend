// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var type = typing.type;
var any = typing.any;
var nullable = typing.nullable;
var func = typing.func;
var int = typing.int;
var bool = typing.bool;
var str = typing.str;
var array = typing.array;
var tuple = typing.tuple;
var table = typing.table;
var or = typing.or;
var and = typing.and;

function test_table(i) {
    assert(typing(table(int(1,100), str(1,1), str), [[1, 'h', 'host'], [2, 'p', null]]), util.format('case %d.1 failed', i)); 
    assert(!typing(table(int(1,100), str(1,1), str), null), util.format('case %d.2 failed', i)); 
    assert(!typing(table(int(1,100), str(1,1), str), [[1, 'h', 'host'], [2, 'port', null]]), util.format('case %d.3 failed', i)); 

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_table;
