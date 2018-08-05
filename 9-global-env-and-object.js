/*
* Execution Context (Global)
* Create Global Object and 'this' by js engine
*
*/

// The Excution Context that create by js engine crate window object and this
// in node js it is the global
// the window object is the this keyword
// Global = not inside funciton

console.log(window);
console.log(this);

var a = 'hello word';

function b(){
    // Outer envirment
    console.log(this);
}

b();

console.log(window.a);
console.log(window.b);

