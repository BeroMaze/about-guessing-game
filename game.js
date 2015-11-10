// right is to count how many answers the user gets right
var right = 0;
//numGuess is how many trys it takes the user to guess the number
var numGuess = 1;
//function to count yes's
var userYes = function(resp) {
      if ((resp === "yes") || (resp === "Yes") || (resp === "y") || (resp === "Y") || (resp === "YES"))  {
        right++;
        console.log(right);
      }
    }
//function to count no's
var userNo = function(resp){
      if ((resp === "no") || (resp === "No") || (resp === "n") || (resp === "N") || (resp === "NO")) {
        right++;
        console.log(right);
      }
    }
// function for user input for the questions
var userInput = function(resp, feedback1, feedback2, feedback3, feedback4) {
  console.log(resp);
  if ((resp === "yes") || (resp === "Yes") || (resp === "y") || (resp === "Y") || (resp === "YES")) {
    var question = document.getElementById(answer).innerHTML = feedback3;
    console.log(feedback1);
  }
 else {
    console.log(feedback2);
    var question = document.getElementById(answer).innerHTML = feedback4;
 }
}
//function for the numbers guesssing game
  var numGame = function() {
          var number = Math.floor(Math.random() * 5) + 1;
            var qu5 = prompt("Lets play a little side game. This one is between you and the computer. Guess a number 1-5");
                while (Number(qu5) === 0) {
                  qu5 = prompt("You did not enter a number. Please Enter a Number that is between 1-5.");
                }
                while ((Number(qu5) < 1) || (Number(qu5) > 5)) {
                  qu5 = prompt("Sorry, but that number does not fall inbetween 1-5. Please guess again.");
                }
                while (Number(qu5) < number) {
                  qu5 = prompt("Thats a Little Low. Guess again.");
                  numGuess++;
                }
                while (Number(qu5) > number) {
                  qu5 = prompt("thats a Little high. Guess again.");
                  numGuess++;
                }
                while (Number(qu5) === number) {
                 document.getElementById('answer5').innerHTML = "Great Job. " + number + " was the right number.";
                  break;
               }
             }
// Results of user guessing game
var numResults = function() {
      if (Number(numGuess) === 1) {
        document.getElementById("numRus").innerHTML = "Great Job One guess. Thats inpressive!!!";
      }
      else if (Number(numGuess) === 2) {
        document.getElementById("numRus").innerHTML = "Not bad. 2 guess is pretting good.";
      }
      else if (Number(numGuess) === 3) {
        document.getElementById("numRus").innerHTML = "3 guesses, 60% isn't the worst.";
      }
      else {
        document.getElementById("numRus").innerHTML = "The computer really got you this time.";
      }
}

// asking user if the want to play the game
var game = prompt("Would you like to learn a little about me?");
      feedback1 = "Lets play a game. I will ask you three questions about me. See how many you can get right.";
      feedback2 = "Fine dont learn about me. We could of played a fun game!";
    userInput(game, feedback1, feedback2);

    if ((game === "yes") || (game === "Yes") || (game === "y") || (game === "Y") || (game === "YES")) {

//question 1
      var qu1 = prompt("Was I born in Wisconsin?");
          feedback1 = "Nope, sorry I was really born in Denver, Colorado.";
          feedback2 = "You are correct, I was really born in Denver, Colorado.";
          feedback3 = "You answered " + qu1 + ". Sorry I was really born in Denver, Colorado.";
          feedback4 = "You answered " + qu1 + ". Great job, I was real born in Denver, Colorado.";
        userInput(qu1, feedback1, feedback2, feedback3, feedback4);
        userNo(qu1);

//question 2
      var qu2 = prompt("Is the color of my car Matte Black?");
          feedback1 = "That's correct, all black everything.";
          feedback2 = "Sorry, but it is. There is a custom finish on it.";
          feedback3 = "You answered " + qu2 + ". That's right it is all black.";
          feedback4 = "You answered " + qu2 + ". My car is all black, you should check it out.";
        userInput(qu2, feedback1, feedback2, feedback3, feedback4);
        userYes(qu2);

//question 3
      var qu3 = prompt("Is the weight of both my dogs added together over 120 pounds?");
          feedback1 = "That's correct, together they weight 121 pounds.";
          feedback2 = "Sorry, but it True. Together they weight 121 pounds.";
          feedback3 = "You answered " + qu3 + " and you are correct. They weight 121 pounds.";
          feedback4 = "You answered " + qu3 + ". Crazy enough they are 121 pounds together.";
        userInput(qu3, feedback1, feedback2, feedback3, feedback4);
        userYes(qu3);

//question 4
      var qu4 = prompt("This next question contains some music thought. Is one of the styles of music that I like called Indie?");
          feedback1 = "Sorry Indie is not really my thing.";
          feedback2 = "Thats right. Indie really isnt for me.";
          feedback3 = "You answered " + qu4 + ". Sorry Indie isn't really my style of music.";
          feedback4 = "You answered " + qu4 + ". Thats right Im more of a Electronic music person.";
        userInput(qu4, feedback1, feedback2, feedback3, feedback4);
        userNo(qu4);

//number guessing game
        numGame();

//tells the user how they did
alert("You got " + right + " out of 4.");
alert("It took you " + numGuess + " trys to guess the number.");

//tells the user how the did in the guessing game
numResults();


}

