/* variable env = where is the variable*/

function b(){
    var myVar;
    console.log(myVar)
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();

// 1) Global execution context created -> myVar = 1
// 2) new execution context create for a() and myVar of a insert to is exe context
// 3) b() the same
// 4) this key word