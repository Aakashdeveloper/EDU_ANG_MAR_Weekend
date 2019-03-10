// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var bool = typing.bool;

function test_bool(i) {
    assert(typing(bool, true));
    assert(typing(bool, false));
    assert(!typing(bool, null));
    assert(!typing(bool, ''));
    assert(!typing(bool, 1));
    assert(!typing(bool, []));
    assert(!typing(bool, {}));
    assert(!typing(bool, function(){}));
    console.log(util.format('test suit %d passed', i));
}


module.exports = test_bool;
