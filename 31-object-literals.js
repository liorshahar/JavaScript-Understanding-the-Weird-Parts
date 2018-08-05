var Lior = {
    name: 'lior',
    age: 20,
    address:{
        street:'jaffa',
        city: 'jerusalem'
    }
}

function greet(person){
    console.log('Hi + ' + person.name);
}

greet(Lior);
greet({name: 'Tony' , age:20});