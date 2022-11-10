let shortestLength =100;
let shortestValue ;

function shorterInArray(arr){
for(let x=0; x<arr.length; x++){
if(arr[x].length < shortestLength){
    shortestLength = arr[x].length;
    shortestValue = arr[x];
    }
    }
    document.write(shortestValue);
}
shorterInArray(["alex", "mercer", "made", "rashed2", "emad", "hala"]);