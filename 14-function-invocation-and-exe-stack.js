function b(){
    console.log('b Called!')
    console.log(this); 
}

function a(){
    console.log('a Called!')
    console.log(this);
    b();
    function c(){
        console.log('C Called!')
        console.log(this);
    }
    c();
 
}


a();


// 1) Global Execution Context -> this , window....
// 2) Add the a , b function
// 3) execute the function
// 4) create a() new execution Context and pot on execution stack
// 5) create b() new execution Context and pot on execution stack