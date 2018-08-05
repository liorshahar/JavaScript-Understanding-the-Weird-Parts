// Object and function()
// Object and the dot
// Object -> collection of valuse
// Object  contain reference   property  Object  Method

//                   Object  0x001
//           ///////       //\\      \\\\\\
//  primitive            Object          method
//  0x002                0x003           0x004



var person = new Object();

person['firstName'] = 'Tony';
person.age = 20;
person.getName = function(){
    console.log(this.firstName);
}