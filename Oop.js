// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var obj={};
  
  obj.upper=upperbound;
  obj.rand=randInt(obj.upper)
  obj.counter=0;


  reurn obj;
    
  }
  
    guessMyNumber:function(n){


    counter++;
      if (n > upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    },
    giveUp:function(){
      return rand;
    },
    numOfGuesses:function(){
      return counter;
    }



















