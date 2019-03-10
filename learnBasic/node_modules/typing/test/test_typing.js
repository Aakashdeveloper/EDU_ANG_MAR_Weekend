#!/usr/bin/env node

// imports 
var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');

var type = typing.type;
var any = typing.any;
var nullable = typing.nullable;
var func = typing.func;
var int = typing.int;
var num = typing.num;
var bool = typing.bool;
var str = typing.str;
var array = typing.array;
var tuple = typing.tuple;
var table = typing.table;
var or = typing.or;
var and = typing.and;

// main
try {
    var test_any = require('./test_any.js');
    var test_bool = require('./test_bool.js');
    var test_int = require('./test_int.js');
    var test_str = require('./test_str.js');
    var test_array = require('./test_array.js');
    var test_tuple = require('./test_tuple.js');
    var test_json = require('./test_json.js');
    var test_table = require('./test_table.js');
    var test_nullable = require('./test_nullable.js');
    var test_recursive = require('./test_recursive.js');
    var test_composite = require('./test_composite.js');
    var test_enumeration = require('./test_enumeration.js');
    var test_char = require('./test_char.js');
    var test_num = require('./test_num.js');

    test_any(1);
    test_str(2);
    test_array(3);
    test_tuple(4);
    test_json(5);
    test_table(6);
    test_nullable(7);
    test_int(8);
    test_recursive(10);
    test_bool(11);
    test_composite(12);
    test_enumeration(13);
    test_char(14);
    test_num(15);

    console.log("ALL TEST CASES PASSED");
}
catch (e) {
    console.error(e.stack);
}
