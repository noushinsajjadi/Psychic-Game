var GuesessLeft = 9;
var losees = 0 ;
var Wins = 0;
var computerLetter = MakeLetter();
console.log(computerLetter);

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var key = event.key;
        document.getElementById("GuessesLeft").innerHTML = GuesessLeft;
        console.log(key);
        console.log(computerLetter);

        
         if (computerLetter === key) {
             GuesessLeft = 9  ;
             Wins ++ ; 
             document.getElementById("Wins").innerHTML = Wins;
             document.getElementById("GuessesLeft").innerHTML = GuesessLeft;
             console.log("GuesessLeft" + GuesessLeft);
             console.log("Wins" + Wins);
             console.log("losees" + losees);
             console.log("You are Winer ! new game is starting");
             //alert("You are Winer ! new game is starting");
             computerLetter = MakeLetter();
             console.log("computerLetter  " + computerLetter);

                 }
             

          else {
                   GuesessLeft--;
                   document.getElementById("GuessesLeft").innerHTML = GuesessLeft;
                   console.log("GuesessLeft" + GuesessLeft);
                   console.log("Wins" + Wins);
                   console.log("losees" + losees);
                   if( GuesessLeft === 0)

                    {
                       computerLetter = MakeLetter();
                       losees++;
                       document.getElementById("Losses").innerHTML = losees;
                       //alert(" You are looser ! new game  is starting and  the letter is  " + computerLetter);
                       GuesessLeft =  9 ;
                       document.getElementById("GuessesLeft").innerHTML = GuesessLeft;
                       console.log("You are looses new game start"); 
                       console.log("GuesessLeft" + GuesessLeft);
                       console.log("Wins" +  Wins);
                       console.log("losees" + losees);
                       console.log("computerLetter  " + computerLetter);

                     }    
                }
           

         
        
    }
}

    function MakeLetter() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        text = possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

