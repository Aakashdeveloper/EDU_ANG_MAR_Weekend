// test cases

var util = require('util');
var assert = require('assert');
var typing = require('../typing.js');
var enumeration = typing.enumeration;

function test_enumeration(i) {
    var e;
    
    e = enumeration();
    assert(!typing(e, null));

    e = enumeration('foo', 'bar');
    assert(typing(e, 'foo'));
    assert(!typing(e, 'Foo'));
    assert(typing(e, 'bar'));
    assert(!typing(e, 'BAR'));

    e = enumeration(1, 2, 3);
    assert(!typing(e, 0));
    assert(typing(e, 1));
    assert(typing(e, 2));
    assert(typing(e, 3));
    assert(!typing(e, 4));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_enumeration;
