var right = 0;
var userYes = function(resp) {
      if ((resp === "yes") || (resp === "Yes") || (resp === "y") || (resp === "Y") || (resp === "YES"))  {
        right++;
        console.log(right);
      }
    }
var userNo = function(resp){
      if ((resp === "no") || (resp === "No") || (resp === "n") || (resp === "N") || (resp === "NO")) {
        right++;
        console.log(right);
      }
    }
var userInput = function(resp, feedback1, feedback2, feedback3, feedback4) {
  console.log(resp);
  if ((resp === "yes") || (resp === "Yes") || (resp === "y") || (resp === "Y") || (resp === "YES")) {
    console.log(feedback1);
    alert(feedback3);
  }
 else {
    console.log(feedback2);
    alert(feedback4);
 }
}

var game = prompt("Would you like to learn a little about me?");
      feedback1 = "Lets play a game. I will ask you three questions about me. See how many you can get right.";
      feedback2 = "Fine dont learn about me. We could of played a fun game!";
    userInput(game, feedback1, feedback2);

    if ((game === "yes") || (game === "Yes") || (game === "y") || (game === "Y") || (game === "YES")) {

      var qu1 = prompt("Was I born in Wisconsin?");
          feedback1 = "Nope, sorry I was really born in Denver, Colorado.";
          feedback2 = "You are correct, I was really born in Denver, Colorado.";
          feedback3 = "You answered " + qu1 + ". Sorry I was really born in Denver, Colorado.";
          feedback4 = "You answered " + qu1 + ". Great job, I was real born in Denver, Colorado.";
        userInput(qu1, feedback1, feedback2, feedback3, feedback4);
        userNo(qu1);


      var qu2 = prompt("Is the color of my car Matte Black?");
          feedback1 = "That's correct, all black everything.";
          feedback2 = "Sorry, but it is. There is a custom finish on it.";
          feedback3 = "You answered " + qu2 + ". That's right it is all black.";
          feedback4 = "You answered " + qu2 + ". My car is all black, you should check it out.";
        userInput(qu2, feedback1, feedback2, feedback3, feedback4);
        userYes(qu2);


      var qu3 = prompt("Is the weight of both my dogs added together over 120 pounds?");
          feedback1 = "That's correct, together they weight 121 pounds.";
          feedback2 = "Sorry, but it True. Together they weight 121 pounds.";
          feedback3 = "You answered " + qu3 + " and you are correct. They weight 121 pounds.";
          feedback4 = "You answered " + qu3 + ". Crazy enough they are 121 pounds together.";
        userInput(qu3, feedback1, feedback2, feedback3, feedback4);
        userYes(qu3);

      var qu4 = prompt("This next question contains some music thought. Is one of the styles of music that I like called Indie?");
          feedback1 = "Sorry Indie is not really my thing.";
          feedback2 = "Thats right. Indie really isnt for me.";
          feedback3 = "You answered " + qu4 + ". Sorry Indie isnt really my style of music.";
          feedback4 = "You answered " + qu4 + ". Thats right Im more of a Electronic music person.";
        userInput(qu4, feedback1, feedback2, feedback3, feedback4);
        userNo(qu4);

alert("You got " + right + " out of 4.");
}










