fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    res.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally("fetch api data is ended");

fetch ("https://jsonplaceholder.typicode.com/users/",{
   method:"POST",
   body:JSON.stringify({
    id: 14,
    name: 'Minte',
    username: 'MMM',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Addis Ababa',
      zipcode: '31428-2261',
      geo: "[Object]"
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }),
   
   headers: { "Content-Type": "application/json" },
   

}).then(res=> console.log( `POST STATUS ${res.status}` ))

  fetch("https://jsonplaceholder.typicode.com/users/",{
    method:"GET"
  })
  .then(res => res.json())
  .then(data => console.log(data))


  
//
fetch("https://jsonplaceholder.typicode.com/users")

  .then(res =>  res.json())
  .then(data => console.log(`your data is ${data}`));