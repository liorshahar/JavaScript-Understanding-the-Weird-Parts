// objects, function, and this
//
//  when function invoke , new execution context 
//  is created and the function  added to execution stack
// 
//  Variable                   'this'               Outer
//  Environment                                     Environment
//
//  this will be pointed to deferent things depend how the
//  function called , and where the function is.
//
//
//
//

console.log(this); // Global execution level
                   // in this level of code , this pointed to global objct

function a(){
    console.log(this);
    //this pointed-> global object
}

var b = function(){
    console.log(this);
    // //this pointed-> global object
}


// new execution context for a
a();

// new execution context for b
b();

// object method
// object litteral
var c = {
    name: 'The c object',
    log: function(){
        this.name = 'update c object'
        console.log(this);
        function f(){
            console.log(this);  //this pointed-> global object
        }
        f();
    }
}

c.log();

var ce = {
    name: 'The ce object',
    log: function(){
        var self = this;
        this.name = 'update ce object'
        console.log(this);
        function f(){
            console.log(self);   //this pointed-> current object this
        }
        f();
    }
}


ce.log();

// execution context
// environment variable
// creation of this keyword
// add the function to exection stack

function self(){
    
    var greet = 'hii'
    
    var a = {
        
        greet : function(){
            console.log(this); // {a object}
            console.log(greet); // hii
            
            function greetIside(){
                console.log(this); // {window object}
                console.log(greet); // hii
            }
            greetIside();
        }
    }
    a.greet();
    
}

self();