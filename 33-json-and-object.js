var objectLiteral = {
    firstName: 'Mary',
    isAprogrammer: true
}

console.log(objectLiteral);


// from object to json
var json = JSON.stringify(objectLiteral);
console.log(json);


// from json to object
var object = JSON.parse(json);
console.log(object);