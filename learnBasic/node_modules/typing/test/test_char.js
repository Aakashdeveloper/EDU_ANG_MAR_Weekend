// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var char = typing.char;

function test_char(i) {
    assert(typing(char, 'a'), util.format('case %d.1 failed', i));
    assert(typing(char, 'Z'), util.format('case %d.1 failed', i));
    assert(typing(char, '!'), util.format('case %d.1 failed', i));
    assert(typing(char, '&'), util.format('case %d.1 failed', i));

    assert(!typing(char, null), util.format('case %d.1 failed', i));
    assert(!typing(char, ''), util.format('case %d.1 failed', i));
    assert(!typing(char, 'ABC'), util.format('case %d.1 failed', i));
    assert(!typing(char, ['a']), util.format('case %d.1 failed', i));
    assert(!typing(char, {a : 'a'}), util.format('case %d.1 failed', i));

    console.log(util.format('test suit %d passed', i));
}

module.exports = test_char;
