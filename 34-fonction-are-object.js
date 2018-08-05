/* First Class function 
*  every thing you can do with other types you can do with functions
*  - assign them variable , pass them around , create them on fly
*  - function is a special type of object
*  can attach to function -> primitive , object  , function
*  NAME -> optional can be anonymous
*  CODE -> the code thet we writh is one of that property and he can 
*  be invoked()
* function is object and CODE is one of his props !!!
*/


function greet(){
    console.log('hi');
    
}

greet.language = 'english';
console.log(greet.language);



/*             function   
                  /\
                 /  \
                /    \
               /      \
             name      code
             greet     console.log(hi) 

*/