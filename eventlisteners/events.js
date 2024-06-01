const input = document.querySelector('input')

input.addEventListener('input',(event) =>{
    event.stopImmediatePropagation() // stops the scond event on this element
    alert("first event")
},{capture:true})
input.addEventListener('input',event =>{
     
    alert("second event")
},{capture:true})

const child = document.querySelector('.child');

child.addEventListener("click",()=>{console.log('this is child')},{capture:true})

const parent = document.querySelector('.parent');

parent.addEventListener(
    "click",
    (event) => {
        console.log("Parent Capture")
        event.stopPropagation() // stops event in the chain, child
    },
    { capture: true }
  )

const button = document.querySelector("button")

const controller = new AbortController();

let count =1;

button.addEventListener(
  "click",
  (event) => {
    alert(`Clicked ${count} times`);
    if (count == 3) {
      controller.abort();
    }
    count++;
  },
  { signal: controller.signal }
);

var buttons =document.querySelectorAll("button")

buttons.forEach(element => {
    
    element.addEventListener("click",e=>{
        alert("you clicked me")
    })
});


document.addEventListener('click',e =>{
   if (e.target.matches("button")) {
    alert("you clicked me")

   }

})

var lastbutton=document.createElement("button");
lastbutton.innerText="Last Button"
document.body.append(lastbutton)