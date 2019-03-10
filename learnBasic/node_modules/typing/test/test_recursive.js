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

function test_recursive(i) {
    var t_tree = {
        value : int,
        left : nullable(type('tree')),
        right : nullable(type('tree'))
    };

    typing.define('tree', t_tree);

    assert(typing('tree', { 
        value : 1, 
        left : { 
            value : 2, 
            left : { value : 3 }
        },
        right : { 
            value : 4, 
            right : { value : 5 }
        }
    }));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_recursive;
