
const sum =  ( a,b )=> {
    return a*b;
}

logging("Debugging")
arrowlogg("Arrow Logging..")
// hoisting 

function logging (name) {

    console.log(name)

}

const arrowlogg = (logg) => {

  console.log(logg)
}