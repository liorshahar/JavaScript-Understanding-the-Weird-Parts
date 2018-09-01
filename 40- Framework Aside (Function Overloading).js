// function overloading
// in js there is no over loading options
// so we need to work in other way, this is just one pattern example

function greet(firstname, lastname, language){
    language = language || 'en';
    
    if(language === 'en'){
        console.log('Hello ' + firstname + '' + lastname);
    }
    
    if(language === 'es'){
        console.log('Hola ' + firstname + '' + lastname);
    }
}

function greetEnglish(firstname, lastname){
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname){
    greet(firstname, lastname, 'es');
}

greetEnglish('lior', 'sh');
greetSpanish('lior', 'sh');