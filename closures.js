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


//

const CreateMath = (num1,num2) =>{

    let _num1= num1;
    let _num2= num2;

    return  {

         getsum :   () =>{
             return _num1 + _num2
        },

        setNum : (newNum1,newNum2)=>{
            _num1=newNum1;
            _num2= newNum2
        }
    }

}
var number= CreateMath(10,20);
 console.log( number.getsum())
number.setNum(40,50)
console.log( number.getsum()) 
number.setNum(100,200)
console.log( number.getsum())

// more methods 


const CreateCounter = (count) => {

     return {

        incriment : ()=> {
             
            count++;
            return count;
        } ,
        decrement : () =>{
               
            count--;
            return count;
        },

        getcount:()=>{
              
            return count;
        }
     }

} 

var countr= CreateCounter(1)
 console.log( 'increment '+countr.incriment())
 console.log( 'increment '+countr.incriment())
 console.log( 'dec '+countr.decrement())
 console.log( 'dec '+countr.decrement())
 console.log( 'dec '+countr.decrement())
 console.log( 'increment '+countr.incriment())


