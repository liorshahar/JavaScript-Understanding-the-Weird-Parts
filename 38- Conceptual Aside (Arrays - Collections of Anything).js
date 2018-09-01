// array collection of anythings

var arr = new Array();

var arr1 = [1, 2, 3];

var arr2 = ["1",
            2,
            {
                name: "yossi",
                log: function(){
                    this.name = 'update c object'
                    console.log(this);
                    function f(){
                        console.log(this);  //this pointed-> global object
                        }
                        f();
                    }
            },
            function(name){
                var greeting = 'Hello ';
                console.log(this); // this pointed to array
                console.log(greeting + name);
            }
           ];

console.log(arr2);
console.log(arr2[2].name);
arr2[3]('lior');
console.log(arr2[2].log());


function a(b){
   b('test');
   
}

a(arr2[3]) // pasing function from array to anouther function, now this pointed to window...