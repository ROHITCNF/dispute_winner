//creating random number for 1st dice
var random_number1=Math.floor(Math.random()*6)+1;

var random_dice_image1="dice"+random_number1+".png"; // dice1.png-dice2.png

var random_source_image1="images/"+random_dice_image1;// images/dice1.png-images/dice6.png

//creating random number for the second dice
var random_number2=Math.floor(Math.random()*6)+1;

var random_dice_image2="dice"+random_number2+".png"; // dice1.png-dice2.png

var random_source_image2="images/"+random_dice_image2;// images/dice1.png-images/dice6.png



//changing the attribute of image now
  var image1=document.querySelectorAll("img")[0];
   image1.setAttribute("src", random_source_image1);

   var image2=document.querySelectorAll("img")[1];
   image2.setAttribute("src",random_source_image2);

//now changing the headline acccording to the dice 1 and dice 2
   if(random_number1>random_number2){
     document.querySelector("h1").innerHTML="&#9989; Player1 wins";
   }
   else if(random_number1<random_number2){
     document.querySelector("h1").innerHTML="&#9989; Player2 wins";
   }
   else{
     document.querySelector("h1").innerHTML="&#128060; Match drawn";
   }
