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

function test_composite(i) {
    var t_cmd_meta = {
        program : str(1,30),
        version : int(1,100),
        version_name : str(1,30),
        subcommands : array(str(1)),
        options : {
            flags : table(str(0,1), str(2), str),
            parameters : table(str(0,1), str(2), str, or(str, int))
        },
        usages : table(str, array(str(1)), array(str(1)), str, func)
    };

    typing.define('t_cmd_meta', t_cmd_meta);

    var value = {
        program : 'adb',
        name : 'Android Debug Bridge',
        version : 10,
        version_name : '1.0.10',
        subcommands : [ 'connect', 'disconnect', 'shell', 'push', 'install' ], 
        options : {
            flags : [
                [ 'h', 'help', 'print program usage' ],
                [ 'r', 'reinstall', 'reinstall package' ],
                [ 'l', 'localhost', 'localhost' ]
            ],
            parameters : [
                [ null, 'host', 'adb server hostname or IP address', 'localhost' ],
                [ 'p', 'port', 'adb server port', 5037 ]
            ]
        },
        usages : [
            [ 'connect', ['host', '[port]'], [], 'connect to adb server', function(){} ],
            [ 'connect', [ 'l' ], [], 'connect to the local adb server', function(){} ],
            [ 'disconnect', [], [], 'disconnect from adb server', function(){} ],
            [ 'shell', [], ['[cmd]'], 'run shell commands', function(){} ],
            [ 'push', [], ['src', 'dest'], 'push file to adb server', function(){} ],
            [ 'install', ['r'], ['package'], 'install package', function(){} ],
            [ null, ['h'], [], 'help', function(){} ],
            [ null, [], [], 'help', function(){} ]
        ]
    };

    assert(typing('t_cmd_meta', value), util.format('case %d.1 failed', i));

    console.log(util.format('test suit %d passed', i));
}


module.exports = test_composite;
