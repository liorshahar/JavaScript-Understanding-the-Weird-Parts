function b(){
    console.log(myVar);
    // every execution context has refernce to outer envirnment
    // the lexical env - where the function set lexicly
    // the function create in the global object there for it has reference to
    // global myVar
}

function a(){
    var myVar = 12;
    b();
    
    function c(){
        console.log(myVar);
        // c function created inside a ->  a is the lexical env of c
    }
    c();
}

var myVar = 1;
a();


function d(){
    function e(){
        
        console.log(myVar);
    }
    var myVar = 8;
    e();
}
d();


/*
this.c = 20;
var a = function(){
    this.t = 10;
    var t = 20;
    console.log(this.t);
    console.log(t);
    console.log(this.c);
}
a();
*/


// 1) execution context // 2) lexical envirnment //3) this // 4) executon stack



