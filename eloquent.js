// Your code here.
var min = function(x, y) {
 return Math.min(x,y);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


function isEven(N){
  if(N % 2 === 0){
    return true;
  }
  
  else if(N % 2 === 1){
    return false;
}
  else {
    return isEven(N -2);

  }
}
  
  
  

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// Your code here.
function countBs(string) {
  var numOfBs = 0; 
  for(i = 0; i < string.length; i++){
    if(string[i] === "B"){
      numOfBs++;
    }
  }
  
    return numOfBs +" " + "Bs";
}
function countChar(string, letter){
  var numOfLetters = 0;
  for(i = 0; i < string.length; i++){
    if (string[i] === letter){
      numOfLetters += 1;
    }
  }
  return numOfLetters +" "+ letter +"s";
}
      
    
  
  

    
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



