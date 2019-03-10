// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var str = typing.str;

function test_str(i) {
    assert(typing(str(0,0), null), util.format('case %d.1 failed', i));
    assert(typing(str(0,0), ''), util.format('case %d.2 failed', i));
    assert(typing(str(0,1), null), util.format('case %d.3 failed', i));
    assert(typing(str(0,1), ''), util.format('case %d.4 failed', i));
    assert(typing(str(1,1), 'q'), util.format('case %d.5 failed', i));
    assert(!typing(str(1,1), null), util.format('case %d.6 failed', i));
    assert(!typing(str(1,30), ''), util.format('case %d.7 failed', i));
    assert(!typing(str(1,5), 'hello world'), util.format('case %d.8 failed', i));
    assert(typing(str(1,5), 'hello'), util.format('case %d.9 failed', i));
    assert(typing(str(1), 'hello'), util.format('case %d.10 failed', i));
    assert(!typing(str(10), 'hello'), util.format('case %d.11 failed', i));
    assert(!typing(str, ['a', 'b', 'c']), util.format('case %d.11 failed', i));
    assert(!typing(str(0), ['a']), util.format('case %d.12 failed', i));
    assert(!typing(str, {}), util.format('case %d.13 failed', i));
    assert(!typing(str(0), {}), util.format('case %d.14 failed', i));
    assert(!typing(str, function(){}), util.format('case %d.15 failed', i));
    assert(!typing(str(0,1000), function(){}), util.format('case %d.16 failed', i));
    assert(typing(str, undefined), util.format('case %d.17 failed', i));
    assert(typing(str(0), undefined), util.format('case %d.17 failed', i));
    assert(typing(str(0,0), undefined), util.format('case %d.18 failed', i));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_str;
