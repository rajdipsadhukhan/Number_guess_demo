let triesLeft = 5;
const correctNum = Math.floor(Math.random() * 20) + 1;

function checkGuess(){
    const userGuess = parseInt(document.getElementById("guess").value);
    const message = document.getElementById("message");
    const triesLeftDisplay = document.getElementById("triesLeft");

    
     
    triesLeft --;
    if(correctNum === userGuess){
        message.textContent = "You guessed correct. The correct number is "+correctNum;
        triesLeftDisplay.textContent = "";
    }
    else if(correctNum < userGuess){
        message.textContent = "Correct number is less than the submitted one. Try again";
        
    }
    else if(correctNum > userGuess){
        message.textContent = "Correct number is greater than the submitted one. Try again";
        
    }
    if(correctNum != userGuess || triesLeft !=0){
        triesLeftDisplay.textContent = "you have "+triesLeft+" tries left";
    }
    if(triesLeft <= 0){
        message.textContent = "you have no tries left ."+"correct number is: "+correctNum;
        triesLeftDisplay.textContent = ""; 
        
    }
     if(triesLeft <= 0 && correctNum === userGuess){
        message.textContent = "You guessed correct. The correct number is "+correctNum;;
        triesLeftDisplay.textContent = ""; 
        
    }

    if(userGuess<1 || userGuess>20){
        message.textContent = "Choose a valid number between 1-20";
        
        
        
    }
   


}

