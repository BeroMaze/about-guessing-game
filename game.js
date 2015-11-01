var game = prompt("Would you like to learn a little about me?");
var right = 0;
  if ((game === "yes") || (game === "Yes") || (game === "Y") || (game === "y") || (game === "YES")) {
      alert("Lets play a game. I will ask you three questions about me. See how many you can get right.");

      var qu1 = prompt("Was I born in Wisconsin?");
        if ((qu1 === "yes") || (qu1 === "Yes") || (qu1 === "Y") || (qu1 === "y") || (qu1 === "YES"))  {
              alert("You answered " + qu1 + ". Sorry I was really born in Denver, Colorado.");
              console.log("Nope, sorry I was really born in Denver, Colorado.");
        }
        else { //if (qu1 === "no") {
              alert("You answered " + qu1 + ". Great job, I was real born in Denver, Colorado.");
              console.log("You are correct, I was really born in Denver, Colorado.");
              right++;
              console.log(right);
        }

      var qu2 = prompt("Is the color of my car Matte Black?");
        if ((qu2 === "yes") || (qu2 === "Yes") || (qu2 === "Y") || (qu2 === "y") || (qu2 === "YES")) {
              alert("You answered " + qu2 + ". That's right it is all black.");
              console.log("That's correct, all black everything.");
              right++;
              console.log(right);
        }
        else { //if (qu2 === "no") {
              alert("You answered " + qu2 + ". My car is all black, you should check it out.");
              console.log("Sorry, but it is. There is a custom finish on it.");
        }

      var qu3 = prompt("Is the weight of both my dogs added together over 120 pounds?");
        if ((qu3 === "yes") || (qu3 === "Yes") || (qu3 === "Y") || (qu3 === "y") || (qu3 === "YES")) {
              alert("You answered " + qu3 + " and you are correct. They weight 121 pounds.");
              console.log("That's correct, together they weight 121 pounds.");
              right++;
              console.log(right);
        }
        else {  //if (qu3 === "no") {
              alert("You answered " + qu3 + ". Crazy enough they are 121 pounds together.");
              console.log("Sorry, but it True. Together they weight 121 pounds.");
        }

alert("You got " + right + " out of 3.");
  }

else {
    alert("Fine dont learn about me. We could of played a fun game!");
}


