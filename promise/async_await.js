 const dealyfunction =(delay)=>{
   
    return new Promise ((resovle,reject)=>{
    

        if (delay<0) {
            reject(`delay must be greter than ${0}`)
        }

        setTimeout(()=>{
             resovle(` you waited for ${delay} milisecond`)
        },delay)  
    })

 }

//  dealyfunction(-1)
//    .then((message) => console.log(message))
//    .catch((message) => {
//      console.log(message);
//    });


async function dostuff () {
    try {
        const result1= await dealyfunction (100);
        console.log(result1)
   
        const result2= await dealyfunction (-100);
        console.log(result2)
    } catch (error) {


        console.log(error)

    }

}
dostuff()