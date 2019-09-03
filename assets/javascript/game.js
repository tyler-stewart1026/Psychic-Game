//some variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []
var charList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var selectedLetter = randomLetter();
console.log(selectedLetter);


//some functions
function randomLetter() {

    var text = charList[Math.floor(Math.random() * charList.length)]

    return text;
};
document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    if (guessesSoFar.includes(userGuess)){
        alert("You've already guessed that letter!")
        console.log("choose another letter");
        return;
    }
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    console.log(userGuess)
    if (guessesLeft < 1) {
        guessesLeft = 10;
        losses = losses + 1;
        guessesSoFar = [];
        selectedLetter = charList[Math.floor(Math.random() * charList.length)];
        document.getElementById("loss").innerHTML = "Losses: " + losses;
        console.log("New Letter: " + selectedLetter);
        console.log("You're out of guesses!")

        return;
    }
    if (!charList.includes(userGuess)) {
        return;
    }
    if (userGuess === selectedLetter) {
        guessesLeft = 10
        wins = wins + 1;
        selectedLetter = charList[Math.floor(Math.random() * charList.length)];
        guessesSoFar = [];
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("guesses-so-far").innerHTML = "Your guesses so far: " + guessesSoFar;
        console.log("You win!");
        console.log("new letter: " + selectedLetter);
    }
    else {
        guessesSoFar.push(userGuess)
        guessesLeft = guessesLeft - 1
        document.getElementById("guesses-so-far").innerHTML = "Your guesses so far: " + guessesSoFar;
        console.log(guessesLeft)
        console.log("Guess again")
        console.log(guessesSoFar)
    }
    
};


