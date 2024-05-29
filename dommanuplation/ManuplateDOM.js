var body = document.body;

var element= document.createElement("h1")
element.innerText="Hey This is Js element"
body.append(element)
body.append("Hello Minte")


var paragraph=document.querySelector('.para')
paragraph.id='Newid';

spandata= document.querySelector('.test');
 console.log (spandata.dataset);
  console.log( spandata.dataset.testValue);
  spandata.dataset.newdata="New-Data";
  console.log(spandata.dataset)

  spandata.classList.add('Class1')
  spandata.classList.remove('Class1')
  spandata.style.color="lightblue"
  spandata.style.fontSize="2rem";

//body.remove(element)