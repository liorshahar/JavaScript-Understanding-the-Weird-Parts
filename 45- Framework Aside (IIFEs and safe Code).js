
var greeting = 'Hi';

((name)=>{
    
    var greeting  = 'Hola ';
    console.log(greeting + name)
})('john');

console.log(greeting);


((global , name)=>{
    
    global.greeting  = 'Hola ';
    console.log(greeting + name)
})(window , 'john');

console.log(greeting);