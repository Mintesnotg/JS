const handlesomework = (value)=> {

    return new Promise((resolve,reject)=>{

        if ( 1===value) {
            resolve()
        } else{
            reject()
        }
    })
}

handlesomework(1)
  .then(() =>  console.log('success'))
  .catch(() =>  console.log("error") ).finally(()=> console.log(" end of excution"))

  // promise all 

  function One (value) {

    return  new Promise((resolve,reject)=>{
         
        if (1===value) {
             resolve();
        } else {
            reject();
        }
    })
  }
  function Two (value) {

    return  new Promise((resolve,reject)=>{
         
        if (2===value) {
             resolve();
        } else {
            reject();
        }
    })
  }



  Promise.any([One('1'), Two(2)])
    .then(() => console.log("success"))
    .catch(() => console.log("error")).finally(()=> console.log('end') );