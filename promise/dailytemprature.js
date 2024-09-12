/**
 * @param {string} s
* @return {string}
*/
var longestNiceSubstring = function (s) {

     var longestsubstring="";
     var purelongeststring="";
     var gotpreceed=false;
     var purepreceed=false
    for (let index = 0; index < s.length-1; index++) {
      
      
        const preceedingstr = s[index];
        const exceedingstr = s[index+1];
        const nextexceedingstr = s[index+1+1];

        if (preceedingstr.toLowerCase() === exceedingstr.toLowerCase()) {
           
           if (gotpreceed) {

            console.log()
            if ( longestsubstring[longestsubstring.length-1].toLowerCase() === exceedingstr.toLowerCase()) {
                longestsubstring+=exceedingstr;

            }
      
            else
             {
                longestsubstring+=preceedingstr;
                longestsubstring+=exceedingstr;
            }

           } else {
            longestsubstring+=preceedingstr;
            longestsubstring+=exceedingstr;
           }
            gotpreceed=true;
        } 
       else if(longestsubstring) {
        if (longestsubstring[longestsubstring.length - 1].toLowerCase() != exceedingstr.toLowerCase()) {
            if (nextexceedingstr) {
                if (nextexceedingstr.toLowerCase() != exceedingstr.toLowerCase()) {
                   break;
                }else {
                    continue;
                }
            }
       }
        

        } 

        
        
    }
    

    return longestsubstring
};

 console.log( longestNiceSubstring("cChH"))