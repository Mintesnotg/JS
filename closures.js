function outterfunction (outtervariable) {

    return function innerfunction(innvervar){
        console.log('Inner Variable '+innvervar)

        console.log('Outter function '+ outtervariable)

    }

}
//

const createcount = () => {

    let count =0;

    return counters = ()=> {
        count++;
        return count;
    }
}

var counter= createcount();
console.log(counter())
console.log(counter())
console.log(counter())


// 

const Createperson =(name) => {

    let _name= name;

    return {
     getname :  function () {
     
        return _name
     },

     setname : function (newName) {
        _name=newName;
     
     }
    }
}
     


var personname=Createperson("Minte ...")

console.log(personname.getname())
personname.setname("Ami")
console.log(personname.getname())


