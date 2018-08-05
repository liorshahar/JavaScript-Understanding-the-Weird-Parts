/*
* The execution Context -> creation and hoisting
*
*
*
*/



// Example of normal behavior

/*
var a = 'hello world!';
function b(){
    console.log('called b!');
}

b();
console.log(a);

*/


// Example of js behavior
// This is work because js have hoisting -> 
// the execution context work in 2 fase 
// 1) the parser run on code and setup memory space for variable and function
// 2) in this step the execution assign the valuse to the variable
// variable set to undefined
// function save completly in memory
//

b();
console.log(a); // undefined 

var a = 'hello world!';
function b(){
    console.log('called b!');
}


