grandparent= document.querySelector('#grandparent-id')
debugger;

var allchilds= Array.from(document.querySelectorAll('.child'));

childs=  Array.from(document.querySelector('#grandparent-id').children)

var sibling= document.querySelector('#child-one').nextElementSibling;
var sibling2= document.querySelector('#child-two').previousElementSibling;
var firstparent=  document.querySelector('#child-one').parentElement;
const changesiblingcolor = (element)=>{
    var colorvalue=`#449911`;
   element.style.backgroundColor=colorvalue;

}
//changesiblingcolor(sibling)
//changesiblingcolor(sibling2)
changesiblingcolor(firstparent)


 const changecolor = (element) =>{
    debugger
    var colorvalue=`#333862`;
   element.style.backgroundColor=colorvalue;
 }
//childs.forEach(changecolor)
// firstparent.forEach(changesiblingcolor)

//  changecolor(grandparent)

//  allchilds.forEach((ele)=>{(changecolor(ele))})
