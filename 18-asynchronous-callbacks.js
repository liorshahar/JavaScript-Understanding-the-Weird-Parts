// 1) the java scrip engine
// 2) the rendering engine
// 3) http request

// 4) execution stack -> list of function call
// 5) event queue 
// when execution stack is empty js engine check the event queue and the create execution context for the function that in the event queue


function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){
        
    }
    console.log('Finished waiting');
}

function clickHandler(){
    console.log('click event!');
}

document.addEventListener('click' , clickHandler);

waitThreeSeconds();
console.log('finished execution');