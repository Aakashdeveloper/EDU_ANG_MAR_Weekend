#A Quick Guide to Typing.js

##1. Overview

Typing.js is an expressive and intuitive type checking and JSON schema validation library for Node.js. It goes beyond the JSON schema validation, it actually looks like a runtime type system for JavaScript. 

**Features:**

1. a set of commonly used built-in types, i.e. int, str, array, tuple, table;
2. C++ template style type definition;
3. structure based pattern matching
4. recursive type

**Samples:** 

```JavaScript
// import module and the built-in types
var typing = require('typing');
var int = typing.int;
var str = typing.str;
...
var tuple = typing.tuple;
var table = typing.table;

// primitive type checking
typing(bool, true) //true
typing(int(0,10), 5) //true
typing(char, 'q') //true
typing(str(3,10), 'hello') //true
typing(enumeration('foo', 'bar'), 'foo') //true

// composite type checking
typing(
    tuple(int, str, tuple(str, str)), 
    [23, 'todd', ['82301588', 'todd@mail.com']]
) //true

// pattern matching
typing(
    { 
        id : int, 
        male : bool, 
        name : str(1,50), 
        contact : { tel : str, email : str }
    }, 
    { 
        id : 23, 
        male : true, 
        name : 'todd', 
        contact : { tel : '82301588', email : 'todd@mail.com' }
    }
) //true
```

**Usage:**

```Javascript
typing(type, data); //true: matched; false: not matched
```

where ```type``` can be:

1) Function with ```__name__``` and ```__check__``` property. 

For example, the built-in type ```bool``` is defined as:

```Javascript
function bool() {}
bool.__name__ = 'bool';
bool.__check__ = function(value) { return true === value || false === value; }
```

```typing(type, data)``` will call ```type.__check__(data)``` in this case. You can define your own types this way, however, be aware that typing comes with a set of built-in types, which can be used to construct complex types. 

2) JSON object.

For example, 

```Javascript
{
    status : {
        code : int,
        message : str
    },
    data : table(int, str, tuple(str, str))
}
```

```typing(type, data)``` will perform pattern matching between type and data based on the structure and recursively check the type of each property. 

3) String.

For example, 

```Javascript
// define 3x3 matrix type under the name 'matrix_3x2'
typing.define('matrix_3x2', tuple(tuple(int, int), tuple(int, int), tuple(int, int)));

// check type with the type name
typing('matrix_3x2', [[11, 12], [21, 22], [31, 32]]); //true
```

##2. How to define types?

**2.1. Define custom type with the built-in types**

```JavaScript
// int(1): integer >= 1;
// str(1,50): string with length between 1 to 50;
// tuple: array with specified type and number of elements
var t_employee = tuple(int(1), str(1,50), tuple(str,str));

typing(t_employee, [123, 'todd', ['1355-0011-107', 'CD 5607']]); //true

typing(t_employee, [0, 'todd', ['1355-0011-107', 'CD 5607']]); //false
```

**2.2. Define custom type in JSON**

```JavaScript
// typing will do pattern matching based the type defined in JSON
// nullable : null or the wrapped type
// table: equivalent of array(tuple)
var t_response = {
    status : {
        code : int,
        message : str
    },
    data : nullable(table(int(1), str(1,50), tuple(str,str)))
};

typing(t_response, {
    status : { 
        code : 200, 
        message : 'OK'
    },
    data : [
        [1, 'Todd', ['1355-0011-107', 'CA 5607']],
        [2, 'April', ['1582-0011-108', 'CA 5607']],
        [3, 'Rex', ['1522-1011-138', 'CA 1008']]
    ]
}); //true

typing(t_response, {
    status : { 
        code : 404, 
        message : 'NOT FOUND'
    }
}); //true

typing(t_response, {
    status : {
        code : 300
    }
}); //false, status.message is missing
```

**2.3. Define recursive type** 
```Javascript
// define a recursive binary tree type under the name 'tree'
// nullalbe(type): extend the wrapped type to accept null value
// type(name): refers to a lazy resolved type
typing.define('tree', {
    value : int,
    left : nullable(type('tree')),
    right : nullable(type('tree'))
});

typing('tree', {
    value : 1,
    left : {
        value : 2,
        left : { value : 3 }
    },
    right : {
        value : 4,
        right : { value : 5 }
    }
}); //true
```

##3. Built-in Types##

**1. any**

```any``` matches any value in JavaScript including null and undefined. 

```Javascript
typing(any, null); //true
typing(any, undefined); //true
typing(any, 123); //true
typing(any, 'hello typing.js'); //true
typing(any, {}); //true
typing(any, []); //true
typing(any, function(){}); //true
```

**2. bool**

```bool``` matches ```true``` or ```false```.

```JavaScript
typing(bool, true); //true
typing(bool, false); //true
```

**3. int**

```int``` matches integers. You can specify the minimal and maximal value by ```int(min)``` or ```int(min,max)```.

```JavaScript
typing(int, -103); //true, no min and max
typing(int, 'hello'); //false
typing(int(100), 99); //false, matches integer >= 100
typing(int(0,1000), 1000); //true, matches integer >= 0 and <= 1000
```

**4. num**

```num``` matches numbers. You can specify the minimal and maximal value by ```num(min)``` or ```num(min,max)```.

```JavaScript
typing(num, -10.3); //true, no min and max
typing(num, 'hello'); //false
typing(num(100), 99.9); //false, matches num >= 100
typing(num(0,51), 25.9); //true, matches num >= 0 and <= 51 
```

**5. str**

```str``` matches strings. You can specify the minimal and maximal lenght by ```str(min)``` or ```str(min,max)```.

```JavaScript
typing(str, null); //true
typing(str, ''); //true
typing(str(0), null); //true
typing(str(0), ''); //true
typing(str(3), 'foo'); //true, matches string with length >= 3
typing(str(4), 'foo'); //false
typing(str(1,3), ''); //false, matches string with length >= 1 and <= 3 
typing(str(1,3), 'hello'); //false, matches string with length >= 1 and <= 3 
```

**6. enumeration**

```enumeration``` matches one of the values.

```JavaScript
typing(enumeration('Saturday', 'Sunday'), 'Sunday'); //true
typing(enumeration('Saturday', 'Sunday'), 'Friday'); //false
typing(enumeration(1, 2, 3), 2); //true
typing(enumeration(1, 2, 3), 5); //false
```

**7. array**

```array``` matches array objects. You can specify the element type of the array.

```JavaScript
typing(array, []); //true
typing(array, [1, 'foo', {}, null]); //true
typing(array(str(3,3)), ['foo', 'bar', 'pee', 'ijk']); //true
typing(array(array(str(3,3))), [['foo'], ['bar', 'pee', 'ijk']]); //true
typing(array({id : int, name : str}), [{id : 1, name : 'todd'}]); //true
typing(array, null); //false
typing(array(str(3,3)), ['fooo', 'barr', 'pee', 'ijk']); //false
typing(array(str(3,3)), [1, 'bar', 'pee', 'ijk']); //false
```


**8. tuple**

```tuple``` matches array objects with specified number and type of elements.

```JavaScript
typing(tuple(int, str), [123, 'todd']); //true
typing(tuple(int(1,100), str(1,100), tuple(str(11, 11), str(1))), 
    [100, 'foobar', ['13550013607', 'Tianfu Software Park C2']]); //true
typing(tuple(int(1,100), str(1,100), {phone : str, address : str}), 
    [23, 'todd', {phone : '13550013607', address : 'CD 5037'}]); //true
typing(tuple(str), null); //false
```


**9. table**

```table(type1, type2 ...)``` is equivalent to ```array(tuple(type1, type2 ...)```, which matches tabular data.

```JavaScript
typing(table(int(1,100), str(1,1), str), [[1, 'h', 'host'], [2, 'p', null]]); //true
typing(table(int(1,100), str(1,1), str), null); //false
typing(table(int(1,100), str(1,1), str), [[1, 'h', 'host'], [2, 'port', null]]); //false
```
