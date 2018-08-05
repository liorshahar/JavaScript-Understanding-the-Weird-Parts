// by value vs by referens
// 
//       primitive value -> by value
//       a (0x001)       a = b        b    (oxoo2)   
//       /                             \ 
//      /                               \
//    primitive                         primitive   
//    value                             value


//        object -> by reference
//       a (0x001)       a = b        b    (oxoo1)   
//       /                             \ 
//      /                               \
//    object / fubction                 object / fubction            
//                             


var a = 3 ;
var b;

// primitive by value
b = a;

// by reference (all object (include function))

var c = { greeting: 'hi'};
var d;

d = c;

//mutate -> to change somthing
c.greeting = 'hello';
console.log(c);
console.log(d);

function changeGreeting(obj){
    obj.greeting = 'hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets new memory space (new address)
c = {greeting : 'howdy'};
console.log(c);
console.log(d);


