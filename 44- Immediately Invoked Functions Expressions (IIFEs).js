// Immediatelty invoked functions expressions (IIFEs)

// using a function statement
function greet(name){
    console.log('Hello ' + name);
};
greet('lior');

// using a function expression
// create the anonymuos function object in the fly... now the greetFunc variable pointing in the memory to the anonymous function object
var greetFunc = function(name){
    console.log('Hello ' + name);
};

var test = 'mytest';
greetFunc('lior');

// the special thing we could do with function expression is to invoke them on the fly

// using an Immediately invoked function expression (IIEF)

var greetFunc1 = function(name){
    console.log('Hello ' + name);
}();

// with arguments
var greetFunc2 = function(name){
    console.log('Hello ' + name);
}('lior');

// with return value

var greetFunc3 = function(name){
   return 'Hello ' + name;
}('greetFunc3');

console.log(greetFunc3);

// function expression  -> created on fly and run the code
(function(){
    console.log('(IIEF)')
})();

(function(name){
    console.log(name);
    console.log(this);
    var test = 'newtest';
    console.log(test);
})('lior iief');

console.log(this.test);

