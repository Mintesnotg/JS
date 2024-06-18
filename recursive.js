function Countrecursive(n) {

    if (n<=0) {
        console.log('finshed..')
        return 
    
    }
    console.log(n)
   return Countrecursive(n-1)

}



Countrecursive(10)

var sum = 0;
function SumRange(n) {

    if (n <= 0) return sum;
    sum += n;
   return SumRange(n-1)
} 

//  console.log( SumRange(7))
console.log(` Sum range of ${3}  is ` +SumRange(3) )