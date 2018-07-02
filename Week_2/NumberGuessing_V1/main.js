/*eslint-env browser*/
function playGame() {
    alert("First enter a low number, then a high number. Then, guess a random number between them.");

    //get the low and high bounds
    //use parseInt() to make sure we havev numbers not strings
    var from = parseInt(prompt("Enter the lower bound, a number between 0 and 1000."));
    while (from < 0 || from > 1000 || isNaN(from)){
        from = parseInt(prompt("Enter a number between 0 - 1000."))  
}
       
      
    var to = parseInt(prompt("Enter the higher bound, a number between 0 and 1000."));
    while (to < 0 || to > 1000){
            to = parseInt(prompt("Enter a number between 0 - 1000."))
}
    while(isNaN(to)){
        to = parseInt(prompt("Please re-enter the higher bound. The higher bound must be a number."))  
  }
    
    while (from >= to){
        from = parseInt(prompt("Please re-enter the lower bound. The lower bound must be less than the higher bound."));
}
    
    //get an integer between [from, to]
    //Math.round() to get whole number
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
    while (currentGuess < from || currentGuess > to){
        currentGuess = parseInt(prompt("The guess must be between " + from + " and " + 10));
}
    while(isNaN(currentGuess)){
        currentGuess = parseInt(prompt("Please re-enter the guess. The guess must be a number"))  
  }
    
    var totalGuesses = 1;

    //loop until user guesses correct number
    while(currentGuess != target){
        if (currentGuess < target){
            currentGuess = parseInt(prompt("Enter a higher number"));
        
    totalGuesses++;
    }
    else if (currentGuess > target){
        currentGuess = parseInt(prompt("Enter a lower number"));
        
        totalGuesses++
    }
}

    alert("It took " +totalGuesses + " tries to guess the correct number.");
}