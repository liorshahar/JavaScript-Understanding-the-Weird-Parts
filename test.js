
var person = {
    firstName: "sJohn",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    },
    updateAllParams:(pObj)=>{
        console.log(this);
        this.firstName = pObj.name,
        this.lastName = pObj.lastName,
        this.id = pObj.id
    }
};


var student = person; 

person.updateAllParams({name:'p1' , laseName:'sh' , id:123 });
person.fullName();
