function greet(whattosay){
    
    //the greet return function and because of that (function is an object) the sayHi variable hold reference to the function
    //and to function greet argument...
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi');
sayHi('lior');

// part 2

//ex1
function buildFuncrion(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    
    return arr;
}

var fs = buildFuncrion();

fs[0](); // 3 \
fs[1](); // 3 -> the output is 3 because 'var i' belonging to the buildFunction and thanks to closuers the function that in arr have 
fs[2](); // 3 /  reference  to the same outher invirnment 

//ex2
// chacking if the return functions from the arr have new execution scope or thay sharing scope variavles

//ex1
function buildFuncrion1(){
    var arr = [];
    var number = 0;
    var self = this;
    arr.push(
        function(num){
            number = num;
        }
    )
    arr.push(
        function(){
            console.log(number);
            console.log('this = ' + this);
            console.log('self = ' + self);
        }
    )
    
    return arr;
}

var fs1 = buildFuncrion1();
var fs2= buildFuncrion1();

fs1[0](10);
fs2[0](20);
fs1[1]();
fs2[1]();
console.log('-----------------------');

// test with object that take function with closuers
var obj = {
    objFunc: fs1
}

obj.objFunc[1]();

//ex3 function factories

function makeGreeting(language){
    return function(firstName, lastName){
        if(language === 'en'){
            console.log('Hello ' + firstName + ' ' + lastName);
        }
        if(language === 'es'){
            console.log('Hola  ' + firstName + ' ' + lastName);
        }
        
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('lior' , 'sh');
greetSpanish('lior' , 'sh');