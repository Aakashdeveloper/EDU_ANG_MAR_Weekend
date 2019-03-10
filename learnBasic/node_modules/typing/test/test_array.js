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

function test_array(i) {
    assert(typing(array, []), util.format('case %d.1 failed', i));
    assert(typing(array, [1, 'foo', {}, null]), util.format('case %d.2 failed', i));
    assert(!typing(array(str(1)), [null, 'foo']), util.format('case %d.3 failed', i));
    assert(!typing(array(str(3)), ['', 'foo']), util.format('case %d.4 failed', i));
    assert(!typing(array(str), [{}, 'foo']), util.format('case %d.5 failed', i));
    assert(!typing(array(str), [[], 'foo']), util.format('case %d.6 failed', i));
    assert(!typing(array(str(3,10)), [[], 'foo']), util.format('case %d.7 failed', i));
    assert(!typing(array(str(3,10)), [function(){}, 'foo']), util.format('case %d.8 failed', i));
    assert(typing(array(str(3,3)), ['foo', 'bar', 'pee', 'ijk']), util.format('case %d.9 failed', i));
    assert(!typing(array(array(str(3,3))), ['foo', 'bar', 'pee', 'ijk']), util.format('case %d.10 failed', i));
    assert(typing(array(array(str(3,3))), [['foo'], ['bar', 'pee', 'ijk']]), util.format('case %d.10 failed', i));
    assert(!typing(array, null), util.format('case %d.11 failed', i));
    assert(!typing(array(int), null), util.format('case %d.12 failed', i));
    assert(typing(array({id : int, name : str}), [{id : 1, name : 'todd'}]), util.format('case %d.13 failed', i));
    assert(!typing(array({id : int, name : str}), [{id : 1, name : 'todd'}, null]), util.format('case %d.14 failed', i));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_array;
