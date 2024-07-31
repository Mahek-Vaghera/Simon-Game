

// var gamePattern = [];
// var buttonColours = ["red","blue","green","yellow"]
// var userClickedPattern=[];
// 
// function playSound(name){
  // var audio = new Audio("sounds/"+name+".mp3");
  // audio.play();
// }
// 
// function nextSequence(){
  // var randomNumber = Math.floor(Math.random()*3)+ 1;
  // var randomChosenColour = buttonColours[randomNumber];
  // gamePattern.push(randomChosenColour);
// 
  // $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
// 
  //  playSound(randomChosenColour);
//  
  // console.log(gamePattern);
// 
// }
// 
// $(".btn").click(function(){
  // var userChosenColour = $(this).attr("id");
  // userClickedPattern.push(userChosenColour);
  // playSound(userChosenColour);
  // console.log(userClickedPattern);
// });
// 
// nextSequence();
// 
// 


var buttonColors = ["red", "blue", "green", "yellow"];



var gamePattern = [];

var userClickedPattern = [];

var started=false;
var level=0;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
  }
});



function nextSequence() {

  userClickedPattern=[];

  level++;

  $("#level-title").text("Level"+level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);



  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);



//play new color audio

  playSound(randomChosenColor);

 console.log(randomChosenColor);

  };

  $(".btn").click(function() {



    var userChosenColor = $(this).attr("id");
  
  //  console.log(userChosenColor);
  
    userClickedPattern.push(userChosenColor);
  
  //  console.log(userClickedPattern);
  
    playSound(userChosenColor);
  
    animatePress(userChosenColor);
  
  
    cheackAnswer(userClickedPattern.length-1);
  });
  
  


function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();

//  console.log(audio);

};

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
    }, 100);
  };
  

  function cheackAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
      console.log("success");

      if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
          nextSequence();
        },1000);
      }
    }
      else{
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
          $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game over,Press Any Key to Restart");


        startOver();
        }
      };




  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
 
  
  