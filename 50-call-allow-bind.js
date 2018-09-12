// call() apply() bind()
// function is a special type of object, therefore the function object have access to 
// is on method... call bind apply

//bind
var person = {
    firstName: 'john',
    lastName: 'lir',
    getFullName: function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var person2 = {
    firstName: 'john2',
    lastName: 'lir2',
    getFullName: function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

// way 1

var logName = function(lang1 , lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1+ ' ' + lang2);
    console.log('----------------');
}

var logPersonName = logName.bind(person); // what this will be...person

logPersonName();
logPersonName('en');
logPersonName('en' , 'es');

// way 2
/*
var logName = function(lang1 , lang2){
    console.log('Logged: ' + this.getFullName());
}.bind(person);

logName();*/

//call

logName.call(person, 'en' , 'un'); // execution the function and not return copy
logName.apply(person, ['ee' , 'un']); // execution the function and not return copy, want array of argumnts

(function(lang1 , lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1+ ' ' + lang2);
    console.log('----------------');
}).apply(person, ['tt','we']);

console.log(person.getFullName.apply(person2));

// function currying

function multiply(a, b){
    return a*b;
}

var multiplByTwo = multiply.bind(this, 2); // pass default arg - 2
console.log(multiplByTwo(4));

var multiplByThree = multiply.bind(this, 3); // pass default arg - 3
console.log(multiplByThree(4));
