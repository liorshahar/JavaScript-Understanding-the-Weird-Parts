// argumants and spread -> send to function // arguments-> parametrs that passing to function

// when function is created

// variable                   'this'               Outher
// environments                                    Environments
//
//                            'arguments'


function greet(firstname , lastname , language){ // the hoisting set up memory space to the arguments
    console.log(firstname);
    console.log(lastname);
    console.log(language);
}

greet();        // in javascript we can call function without passing the arguments.
greet('lior');  // from left to right.
greet('lior', 'sh');
greet('lior', 'sh', 'english');

function greet1(firstname, lastname, language){
    language = language || 'en'; // set default argument
    console.log(firstname);
    console.log(lastname);
    console.log(language);
}
greet1();

function greet2(firstname, lastname, language = 'en'){ // set default argument in new js version
    console.log(firstname);
    console.log(lastname);
    console.log(language);
}
greet2();

function greet3(firstname, lastname, language){ 
    
    if(arguments.length === 0){
        console.log('Missing parameters');
    }
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); // use argument key word, looks like array but it is not
                            // u can do altouge arguments[0]
}
greet3('lior', 'hs', 'en');
greet3();
