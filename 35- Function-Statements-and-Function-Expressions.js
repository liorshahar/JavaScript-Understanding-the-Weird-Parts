// function statements and function expressions
// an expression is a unit of code that result 
// create a value


// if (a === 3) is a statement beacuse no value created

var a = 3; // unit of code thet return value with the = operator

// in js is a function statements and function expressions 

// function statement
function greet(){
    console.log('hello');
}

//function expression


//                 function
//                    / \
//                   /   \ 
//                  /     \
//                name      code
//
//  in js function is an object that attached to him //  line of code and () invoke the code
//

//  var annonymousGreet pointed to the address in the memory of the code (object)

// this is expression becaus new object was created in the memory , the result of the line of code is new value

// hoisted set function statement and variable name to the window context.

var annonymousGreet = function(){ 
    console.log('hello');
}

// the invokation of the code
annonymousGreet();

function log(a){
    console.log(a);
    a();
}

log(()=>{console.log('hi')})





