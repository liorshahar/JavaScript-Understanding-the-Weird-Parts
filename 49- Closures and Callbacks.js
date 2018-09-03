
// ex1

var bool = false;
var test = 'test';
function sayHi(){
    
    var greeting = 'Hi!';
    
    setTimeout(()=>{ // creating function on the fly (function expresion -> new function object created in memory...)
        console.log(greeting); // this first class function have the reference for the outher invrnment variable "greeting" even touge the
    } , 3000)                  // sayHi function finish running
}


sayHi();


// ex2

function sayHi1(){
    
    var greeting = 'Hi!'; // inner function variable
    if(bool){
        greeting = 'By!';
        test = 'testOk';  // global variable
    }
   
    setTimeout(()=>{ // creating function on the fly (function expresion -> new function object created in memory...)
        console.log(greeting + ' ' + test); // this first class function have the reference for the
     } , 3000)                              //outher invrnment variable "greeting" even touge the
                                            // sayHi function finish running
}

sayHi1(); // new execution context for this call 
bool = true;  
sayHi1();  // new execution context for this call, now boll = true