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

function test_json(i) {
    assert(typing({ id : int(1), name : str(1,20), score : int(0,100) }
        , { id : 1, name : 'todd', score : 98 }), util.format('case %d.1 failed', i));
    assert(!typing({ id : int(1), name : str(1,20), score : int(0,100) }
        , { id : 1, score : 6 }), util.format('case %d.2 failed', i));
    assert(typing({ id : int(1), name : str(1,20), score : int(0,100), contact : tuple(str(11,11), str(1)) }
        , { id : 1, score : 6, name : 'dagang', contact : ['13550013607', 'Tianfu Software Park C3'] }), util.format('case %d.3 failed', i));
    assert(!typing({ id : int(1), name : str(1,20), score : int(0,100), contact : tuple(str(11,11), str(1)) }
        , { id : 1, score : 6, contact : ['85432828', 'Tianfu Software Park C3'] }), util.format('case %d.4 failed', i));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_json;
