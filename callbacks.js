const logfname = (firstname) => {

    console.log(firstname)
}

const logfullname = (lastname,fname) => {
    fname;
    console.log(lastname)

}

logfullname("Girma",logfname("Mintesnot"))

setTimeout(() => {
    
    console.log("Hey Minte !")
}, 1000);

setTimeout(() => {
    logfname("Good Afternoon Minte !")
}, 3000);

function printHiClosure() {
    return () => console.log("Hi")
  }
  
  setTimeout(printHiClosure(), 1000)