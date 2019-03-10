// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var any = typing.any;

function test_any(i) {
    assert(typing(any, null) , util.format('case %d.1 failed', i));
    assert(typing(any, ''), util.format('case %d.2 failed', i));
    assert(typing(any, 'hello typing.js'), util.format('case %d.3 failed', i));
    assert(typing(any, function() {}), util.format('case %d.4 failed', i));
    assert(typing(any, [1,2,3]), util.format('case %d.5 failed', i));
    assert(typing(any, {}), util.format('case %d.6 failed', i));

    console.log(util.format('test suit %d passed', i));
}

module.exports = test_any;
