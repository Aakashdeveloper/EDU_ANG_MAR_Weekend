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


function test_tuple(i) {
    assert(typing(tuple(int(1,100), str(1,100), func), [50, 'foobar', function(){}]), util.format('case %d.1 failed', i));
    assert(!typing(tuple(int(1,100), str(1,100), func), [0, 'foobar', function(){}]), util.format('case %d.2 failed', i));
    assert(typing(tuple(int(1,100), str(1,100), tuple(str(11, 11), str(1))), 
        [100, 'foobar', ['13550013607', 'Tianfu Software Park C2']]), util.format('case %d.3 failed', i));
    assert(!typing(tuple(int(1,100), str(1,100), tuple(str(11, 11), str(1))), 
        [100, 'foobar', ['85432828', 'Tianfu Software Park C2']]), util.format('case %d.4 failed', i));
    assert(!typing(tuple(int(1,100), str(1,100), func), null), util.format('case %d.5 failed', i));
    assert(typing(tuple(int(1,100), str(1,100), {phone : str, address : str}), [23, 'todd', {phone : '13550013607', address : 'CD 5037'}])
        , util.format('case %d.6 failed', i));

    console.log(util.format('test suit %d passed', i));
}

module.exports = test_tuple;
