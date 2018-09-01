
var printHi = (()=>{
    function inEnglish(name){
        console.log('Hi ' + name);
    }
    function inSpanish(name){
        console.log('Hola ' + name);
    };
    
    return {inEnglish: inEnglish , inSpanish: inSpanish}
})()

printHi.inEnglish('lior');
printHi.inSpanish('lior');

(()=>{
    function inEnglish(name){
        console.log('Hi ' + name);
        return {inSpanish: inSpanish};
    }
    function inSpanish(name){
        console.log('Hola ' + name);
    };
    
    return {inEnglish: inEnglish , inSpanish: inSpanish}
})().inEnglish('test').inSpanish('test');
;